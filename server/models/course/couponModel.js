const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true, required: true },
    discountPercentage: { type: Number, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    validFrom: { type: Date, required: true },
    validUntil: { type: Date, required: true },
    usageLimit: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
