const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["success", "failed"], required: true },
    method: { type: String },
    transactionId: { type: String },
  },
  { timestamps: true }
);

const Payments = mongoose.model("Payments", paymentSchema);
module.exports = Payments;
