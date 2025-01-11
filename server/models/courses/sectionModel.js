const mongoose = require("mongoose");
const Lesson = require("./lessonModel");

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

sectionSchema.pre(/^find/, function (next) {
  this.populate("lessons");
  next();
});

// Middleware to calculate and set total lessons and duration
sectionSchema.post("save", async function () {
  try {
    // Populate lessons
    await this.populate("lessons");

    if (Array.isArray(this.lessons)) {
      // Calculate total duration and lessons count
      const totalDuration = this.lessons.reduce(
        (acc, lesson) => acc + (lesson.duration || 0),
        0
      );

      // Update fields directly without triggering save recursion
      await this.updateOne({
        totalSectionDuration: totalDuration,
        totalSectionLessons: this.lessons.length,
      });
    } else {
      console.error("Lessons is not an array during post-save operation.");
    }
  } catch (err) {
    console.error("Error in post-save middleware for Section:", err.message);
  }
});

sectionSchema.post("save", async function () {
  const lessons = await Lesson.find({ section: this._id });
  const totalDuration = lessons.reduce(
    (sum, lesson) => sum + lesson.duration,
    0
  );

  await this.updateOne({
    totalSectionDuration: totalDuration,
    totalSectionLessons: lessons.length,
  });
});

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
