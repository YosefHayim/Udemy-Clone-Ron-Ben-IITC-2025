import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/wrapperFn.ts";
import createError from "../../utils/errorFn.ts";
import Course from "../../models/courses/courseModel.ts";
import Coupon from "../../models/courses/couponModel.ts";

// Create new coupon
const createCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      courseId,
      couponCode,
      discountPrice,
      discountPercentage,
      couponType,
      validFrom,
      expirationDate,
      maxUses,
      description,
      restrictions,
      appliedTo,
    } = req.body;

    // Validate required fields
    if (!courseId || !couponCode || !couponType || !expirationDate) {
      return next(createError("Missing required coupon creation fields", 400));
    }

    // Validate discount values based on coupon type
    if (
      couponType === "percentage" &&
      (!discountPercentage || discountPercentage > 100)
    ) {
      return next(createError("Invalid discount percentage", 400));
    }

    if (couponType === "fixed" && !discountPrice) {
      return next(createError("Fixed discount amount is required", 400));
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return next(createError("Course not found", 404));
    }

    // Check if instructor owns the course
    if (course.courseInstructor.toString() !== req.user._id.toString()) {
      return next(
        createError("You can only create coupons for your own courses", 403)
      );
    }

    // Check if coupon code already exists
    const existingCoupon = await Coupon.findOne({ couponCode });
    if (existingCoupon) {
      return next(createError("Coupon code already exists", 400));
    }

    const newCoupon = await Coupon.create({
      courseId,
      couponCode,
      discountPrice,
      discountPercentage,
      couponType,
      validFrom: validFrom || new Date(),
      expirationDate,
      maxUses,
      usedCount: 0,
      createdBy: req.user._id,
      description,
      restrictions,
      appliedTo,
      isActive: true,
    });

    res.status(201).json({
      status: "success",
      message: "Coupon created successfully",
      data: newCoupon,
    });
  }
);

// Validate coupon with enhanced course checks
const validateCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { couponCode, courseId } = req.body;

    if (!couponCode || !courseId) {
      return next(createError("Coupon code and course ID are required", 400));
    }

    // Find active coupon with expanded checks
    const coupon = await Coupon.findOne({
      couponCode,
      courseId,
      isActive: true,
      expirationDate: { $gt: new Date() },
    });

    if (!coupon) {
      return next(createError("Invalid or expired coupon", 400));
    }

    // Get course with essential details
    const course = await Course.findOne({
      _id: courseId,
      isActive: true, // Only allow coupons for active courses
    }).select(
      "courseName courseFullPrice courseDiscountPrice category subCategory courseTopic courseLevel totalStudentsEnrolled"
    );

    if (!course) {
      return next(createError("Course not found or inactive", 404));
    }

    // Enhanced validation checks
    if (coupon.restrictions) {
      // Check category restrictions
      if (
        coupon.restrictions.specificCategories?.length > 0 &&
        !coupon.restrictions.specificCategories.includes(course.category)
      ) {
        return next(
          createError("Coupon not valid for this course category", 400)
        );
      }

      // Check new student restriction
      if (coupon.restrictions.newStudentsOnly) {
        const isEnrolled = course.totalStudentsEnrolled.students.includes(
          req.user._id
        );
        if (isEnrolled) {
          return next(createError("This coupon is for new students only", 400));
        }
      }

      // Check one-time-per-user restriction
      if (coupon.restrictions.oneTimePerUser) {
        const hasUsedCoupon = await Coupon.findOne({
          couponCode,
          usedBy: req.user._id,
        });
        if (hasUsedCoupon) {
          return next(createError("You have already used this coupon", 400));
        }
      }
    }

    // Check applied to restrictions
    if (coupon.appliedTo) {
      // Check if coupon is for specific courses only
      if (
        coupon.appliedTo.courses?.length > 0 &&
        !coupon.appliedTo.courses.includes(courseId)
      ) {
        return next(createError("Coupon not valid for this course", 400));
      }

      // Check if coupon is for specific categories only
      if (
        coupon.appliedTo.categories?.length > 0 &&
        !coupon.appliedTo.categories.includes(course.category)
      ) {
        return next(
          createError("Coupon not valid for this course category", 400)
        );
      }
    }

    // Calculate final price with proper price checks
    let finalPrice: number;
    const basePrice = course.courseDiscountPrice || course.courseFullPrice;

    if (coupon.couponType === "percentage") {
      finalPrice = basePrice * (1 - coupon.discountPercentage / 100);
    } else {
      finalPrice = basePrice - coupon.discountPrice;
    }

    // Ensure minimum price threshold
    finalPrice = Math.max(finalPrice, 0);

    // Check minimum purchase amount if specified
    if (
      coupon.minimumPurchaseAmount &&
      basePrice < coupon.minimumPurchaseAmount
    ) {
      return next(
        createError(
          `Course price must be at least ₪${coupon.minimumPurchaseAmount} to use this coupon`,
          400
        )
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        coupon,
        courseDetails: {
          name: course.courseName,
          category: course.category,
          level: course.courseLevel,
        },
        pricing: {
          originalPrice: course.courseFullPrice,
          currentPrice: basePrice,
          finalPrice,
          totalDiscount: basePrice - finalPrice,
          percentageOff: Math.round(
            ((basePrice - finalPrice) / basePrice) * 100
          ),
        },
        validUntil: coupon.expirationDate,
        usesLeft: coupon.maxUses - coupon.usedCount,
      },
    });
  }
);

// Get all coupons for instructor
const getInstructorCoupons = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const coupons = await Coupon.find({
      createdBy: req.user._id,
    }).populate("courseId", "courseName coursePrice");

    res.status(200).json({
      status: "success",
      results: coupons.length,
      data: coupons,
    });
  }
);

// Update coupon
const updateCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const updateData = req.body;

    const coupon = await Coupon.findById(id);

    if (!coupon) {
      return next(createError("Coupon not found", 404));
    }

    // Verify ownership
    if (coupon.createdBy.toString() !== req.user._id.toString()) {
      return next(createError("You can only update your own coupons", 403));
    }

    // Prevent updating certain fields
    delete updateData.usedCount;
    delete updateData.createdBy;
    delete updateData.courseId;

    const updatedCoupon = await Coupon.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: updatedCoupon,
    });
  }
);

// Deactivate coupon
const deactivateCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const coupon = await Coupon.findById(id);

    if (!coupon) {
      return next(createError("Coupon not found", 404));
    }

    // Verify ownership
    if (coupon.createdBy.toString() !== req.user._id.toString()) {
      return next(createError("You can only deactivate your own coupons", 403));
    }

    coupon.isActive = false;
    await coupon.save();

    res.status(200).json({
      status: "success",
      message: "Coupon deactivated successfully",
    });
  }
);

// Apply coupon with enhanced tracking
const applyCoupon = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { couponCode, courseId } = req.body;

    const coupon = await Coupon.findOne({
      couponCode,
      courseId,
      isActive: true,
    });

    if (!coupon) {
      return next(createError("Invalid coupon", 400));
    }

    // Check if course is still active
    const course = await Course.findOne({
      _id: courseId,
      isActive: true,
    });

    if (!course) {
      return next(createError("Course is no longer available", 400));
    }

    // Track usage
    coupon.usedCount += 1;
    if (!coupon.usedBy) coupon.usedBy = [];
    coupon.usedBy.push(req.user._id);

    // Deactivate if max uses reached
    if (coupon.usedCount >= coupon.maxUses) {
      coupon.isActive = false;
    }

    // Add usage metadata
    coupon.metadata = {
      ...coupon.metadata,
      lastUsedAt: new Date(),
    };

    await coupon.save();

    res.status(200).json({
      status: "success",
      message: "Coupon applied successfully",
      data: {
        coupon,
        appliedAt: new Date(),
        remainingUses: Math.max(0, coupon.maxUses - coupon.usedCount),
      },
    });
  }
);

export {
  createCoupon,
  validateCoupon,
  getInstructorCoupons,
  updateCoupon,
  deactivateCoupon,
  applyCoupon,
};
