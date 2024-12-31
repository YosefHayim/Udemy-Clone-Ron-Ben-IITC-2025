const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    issuedAt: { type: Date, default: Date.now },
    certificateURL: { type: String },
  },
  { timestamps: true }
);

const Certificates = mongoose.model("certificates", certificateSchema);
module.exports = Certificates;
