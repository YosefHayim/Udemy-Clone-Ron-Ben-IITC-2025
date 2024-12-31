const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ["courseUpdate", "review", "reminder"],
      required: true,
    },
  },
  { timestamps: true }
);

const Notifications = mongoose.model("notifications", notificationSchema);
module.exports = Notifications;
