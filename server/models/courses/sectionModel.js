const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Section must belong to a course."],
    },
    title: {
      type: String,
      required: [true, "A section must have a title."],
    },
    totalSectionDuration: {
      type: Number,
      default: 0,
    },
    totalSectionLessons: {
      type: Number,
      default: 0,
    },
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  { timestamps: true }
);

// Middleware to automatically update total lessons and duration
sectionSchema.post("save", async function () {
  const Section = this.constructor;
  const lessons = await this.populate("lessons").execPopulate();
  const totalDuration = lessons.reduce(
    (acc, lesson) => acc + lesson.duration,
    0
  );
  this.totalSectionDuration = totalDuration;
  this.totalSectionLessons = lessons.length;
  await this.save();
});

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
