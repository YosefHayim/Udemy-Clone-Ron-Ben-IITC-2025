const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    role: {
      type: String,
      default: "instructor",
    },
    coursesTeaching: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Reference to the Course model
      },
    ],
    totalStudentsTaught: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseAnalytics",
      required: true,
    },
    totalCourses: {
      type: Number,
      default: 0,
      min: [0, "Total courses cannot be negative."],
    },
    averageRating: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseAnalytics",
    },
    totalRatings: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseAnalytics",
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseAnalytics",
      },
    ],
  },
  { timestamps: true }
);

const Instructions = mongoose.model("Instructor", instructorSchema);
module.exports = Instructions;
