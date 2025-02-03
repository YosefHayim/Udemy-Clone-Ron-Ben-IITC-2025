const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const lessonProgressSchema = new mongoose.Schema({
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  completed: { type: Boolean, default: false },
  lastWatched: { type: Number, default: 0 }, // Last second viewed
  notes: [
    {
      _id: { type: String, default: uuidv4 }, // Unique ID for the note
      seconds: { type: Number, required: true }, // Timestamp of the note
      text: { type: String, required: true }, // Content of the note
    },
  ],
});

const sectionProgressSchema = new mongoose.Schema({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
  lessons: [lessonProgressSchema], // Array of lessons with progress
});

const courseProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    sections: [sectionProgressSchema], // Array of sections
  },
  { timestamps: true }
);
courseProgressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);
module.exports = CourseProgress;
