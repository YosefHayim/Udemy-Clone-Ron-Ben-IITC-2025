const mongoose = require("mongoose");

const courseAnalyticsSchema = new mongoose.Schema({
  courseData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Must provide a course ID"],
  },
  totalStudentsEnrolled: {
    type: Number,
    default: 0,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  TotalCourseReviews: {
    type: Number,
    default: 0,
  },
});

courseAnalyticsSchema.pre(/^find/, function (next) {
  this.populate("courseData");

  next();
});

const CourseAnalytics = mongoose.model(
  "CourseAnalytics",
  courseAnalyticsSchema
);
module.exports = CourseAnalytics;
