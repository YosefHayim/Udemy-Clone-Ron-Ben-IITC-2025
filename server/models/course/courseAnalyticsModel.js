const mongoose = require("mongoose");

const courseAnalyticsSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    category: {
      mainCategory: { type: String, required: true }, // e.g., "Development"
      subCategory: { type: String, required: true }, // e.g., "Programming Languages"
      topic: { type: String }, // e.g., "React JS"
    },
    title: { type: String, required: true }, // e.g., "React - The Complete Guide 2024"
    description: { type: String }, // e.g., "Dive in and learn React.js from scratch!"
    badges: {
      bestseller: { type: Boolean, default: false },
    },
    enrollmentStats: {
      totalStudents: { type: Number, default: 0 }, // e.g., 925,070 students
    },
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        validate: {
          validator: async function (authorId) {
            const user = await mongoose.model("User").findById(authorId);
            return user && user.role === "instructor";
          },
          message: "Authors must be users with the instructor role.",
        },
      },
    ],
    lastUpdated: {
      type: Date,
      required: true, // e.g., "Last updated 12/2024"
    },
    languages: {
      primary: { type: String, required: true }, // e.g., "English"
      subtitles: [{ type: String }], // e.g., ["English [CC]", "Arabic [Auto]"]
    },
    analytics: {
      averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5, // Average rating based on student feedback
      },
      ratingsCount: {
        type: Number,
        default: 0, // Number of students who submitted ratings
      },
      totalLessons: { type: Number, default: 0 }, // Total lessons in the course
    },
  },
  { timestamps: true }
);

const CoursesAnalytics = mongoose.model(
  "coursesAnalytics",
  courseAnalyticsSchema
);
module.exports = CoursesAnalytics;
