const mongoose = require("mongoose");

const courseAnalyticsSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  totalStudentsEnrolled: {
    type: Number,
    default: 0,
  },
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  TotalCourseReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  featuredReview: {
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

courseAnalyticsSchema.pre(/^find/, async function (next) {
  // Populate necessary fields
  this.populate("course")
    .populate("enrolledUsers")
    .populate("TotalCourseReviews");

  // Calculate `totalStudentsEnrolled`
  if (this.enrolledUsers) {
    this.totalStudentsEnrolled = this.enrolledUsers.length;
  }

  // Calculate total and average ratings
  if (this.TotalCourseReviews) {
    const ratings = await mongoose
      .model("Review")
      .find({
        _id: { $in: this.TotalCourseReviews },
      })
      .select("rating");

    const totalRatings = ratings.length;
    const averageRating =
      totalRatings > 0
        ? ratings.reduce((sum, review) => sum + review.rating, 0) / totalRatings
        : 0;

    this.totalRatings = totalRatings;
    this.averageRating = averageRating;
  }

  next();
});
