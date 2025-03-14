import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/wrapperFn.ts";
import createError from "../../utils/errorFn.ts";
import Course from "../../models/courses/courseModel.ts";
import Coupon from "../../models/courses/couponModel.ts";

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

    const course = await Course.findById(courseId);
    if (!course) {
      return next(createError("Course not found", 404));
    }

    if (course.courseInstructor.toString() !== req.user._id.toString()) {
      return next(
        createError("You can only create coupons for your own courses", 403)
      );
    }

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

const getInstructorCoupons = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const instructorName = req.body.createdBy;

    const coupons = await Coupon.find({
      createdBy: instructorName,
    }).populate("courseId", "courseName coursePrice");

    res.status(200).json({
      status: "success",
      results: coupons.length,
      data: coupons,
    });
  }
);

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

const deactivateCouponById = catchAsync(
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

const getCouponByCode = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.params;

    if (!code) {
      return next(createError("Coupon code is required", 400));
    }

    const coupon = await Coupon.findOne({
      couponCode: code,
      isActive: true,
      expirationDate: { $gt: new Date() },
    });

    if (!coupon) {
      return res.status(200).json({
        status: "success",
        exists: false,
        message: "Coupon not found or expired",
      });
    }

    res.status(200).json({
      status: "success",
      exists: true,
      data: {
        couponCode: coupon.couponCode,
        isActive: coupon.isActive,
        expirationDate: coupon.expirationDate,
      },
    });
  }
);

export {
  createCoupon,
  getInstructorCoupons,
  updateCoupon,
  deactivateCouponById,
  getCouponByCode,
};
