const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    duration: { type: Number }, // Duration in minutes
    videoURL: { type: String },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const Lessons = mongoose.model("Lessons", lessonSchema);
module.exports = Lessons;
