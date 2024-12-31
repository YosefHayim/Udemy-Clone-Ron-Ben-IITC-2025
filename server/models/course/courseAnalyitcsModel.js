const mongoose = require("mongoose");

const courseAnalyticsSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  totalStudentsEnrolledInCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  averageRating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }, // Calculated as the average of all ratings
  totalRatings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }, // Number of ratings
  TotalCourseReviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: { type: Number, required: true }, // Rating out of 5
      comment: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  featuredReviews: {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number },
    comment: { type: String },
    createdAt: { type: Date },
  },
});
const CourseAnalytics = mongoose.model(
  "CourseAnalytics",
  courseAnalyticsSchema
);
module.exports = CourseAnalytics;
