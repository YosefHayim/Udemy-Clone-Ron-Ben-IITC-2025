import mongoose, {
  CallbackWithoutResultAndOptionalError,
  Query,
} from "mongoose";
import { CouponDocument } from "../../types/types.ts";

const couponSchema = new mongoose.Schema<CouponDocument>(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Coupon must belong to a course"],
    },
    couponCode: {
      type: String,
      required: [true, "Coupon must have a code"],
      unique: true,
    },
    discountPrice: {
      type: Number,
      required: [true, "Coupon must have a discount price"],
    },
    discountPercentage: {
      type: Number,
      required: [true, "Coupon must have a discount percentage"],
      min: 0,
      max: 100,
    },
    couponType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: [true, "Coupon must have a type"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    validFrom: {
      type: Date,
      required: [true, "Coupon must have a start date"],
      default: Date.now,
    },
    expirationDate: {
      type: Date,
      required: [true, "Coupon must have an expiration date"],
    },
    maxUses: {
      type: Number,
      required: [true, "Coupon must have a maximum usage limit"],
    },
    usedCount: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Coupon must have a creator"],
    },
    description: {
      type: String,
    },
    minimumPurchaseAmount: {
      type: Number,
    },
    restrictions: {
      oneTimePerUser: {
        type: Boolean,
        default: false,
      },
      newStudentsOnly: {
        type: Boolean,
        default: false,
      },
      specificCategories: [
        {
          type: String,
        },
      ],
    },
    appliedTo: {
      courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      categories: [
        {
          type: String,
        },
      ],
      bundleOnly: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to check if the dates are valid.
couponSchema.pre("save", function (next) {
  if (this.validFrom >= this.expirationDate) {
    next(new Error("Valid from date must be before expiration date"));
  }
  next();
});

// Pre-find middleware to populate courseId, courseName and coursePrice.
couponSchema.pre(
  /^find/,
  function (
    this: Query<any, CouponDocument>,
    next: CallbackWithoutResultAndOptionalError
  ) {
    this.populate("courseId", "courseName coursePrice");
    next();
  }
);

const Coupon = mongoose.model<CouponDocument>("Coupon", couponSchema);

export default Coupon;