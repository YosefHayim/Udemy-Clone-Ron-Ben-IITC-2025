const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
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

module.exports = mongoose.model("Notifications", notificationSchema);
