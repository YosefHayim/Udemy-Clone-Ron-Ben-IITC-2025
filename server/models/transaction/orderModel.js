const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    courses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Courses", required: true },
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

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
