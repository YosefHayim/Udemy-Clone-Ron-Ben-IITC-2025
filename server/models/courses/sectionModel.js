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

  // Properly populate lessons
  await this.populate("lessons");

  if (Array.isArray(this.lessons)) {
    const totalDuration = this.lessons.reduce(
      (acc, lesson) => acc + (lesson.duration || 0), // Handle undefined duration
      0
    );

    this.totalSectionDuration = totalDuration;
    this.totalSectionLessons = this.lessons.length;

    // Save updated fields
    await this.save();
  } else {
    console.error("Lessons is not an array during post-save operation.");
  }
});

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
