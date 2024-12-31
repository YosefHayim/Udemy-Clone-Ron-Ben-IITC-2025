const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    paymentDetails: {
      method: String,
      transactionId: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
