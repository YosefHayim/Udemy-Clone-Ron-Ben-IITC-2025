const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Reference to the Course model
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

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
