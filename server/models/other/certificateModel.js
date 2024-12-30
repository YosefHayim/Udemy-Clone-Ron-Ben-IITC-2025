const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    issuedAt: { type: Date, default: Date.now },
    certificateURL: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", certificateSchema);
