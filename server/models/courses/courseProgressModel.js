const mongoose = require("mongoose");

const lessonProgressSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  completed: { type: Boolean, default: false },
  lastWatched: { type: Number, default: 0 }, // Last second viewed
});

const sectionProgressSchema = new mongoose.Schema({
  sectionId: { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true },
  lessons: [lessonProgressSchema], // Array of lessons with progress
});

const courseProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  sections: [sectionProgressSchema], // Array of sections
}, { timestamps: true });
courseProgressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);
module.exports = CourseProgress;
