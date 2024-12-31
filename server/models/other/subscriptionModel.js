const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  }, // Reference to User
  plan: { type: planSchema, required: true }, // Embedded Plan schema
  startDate: { type: Date, required: true, default: Date.now }, // Subscription start date
  endDate: { type: Date, required: true }, // Subscription end date
  status: {
    type: String,
    enum: ["active", "inactive", "cancelled"],
    default: "inactive",
  },
});

const Subscriptions = mongoose.model("subscriptions", subscriptionSchema);
module.exports = Subscriptions;
