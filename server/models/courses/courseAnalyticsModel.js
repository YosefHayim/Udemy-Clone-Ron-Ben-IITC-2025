const mongoose = require("mongoose");
const User = require("../users/userModel"); // Adjust path to your User model

const courseAnalyticsSchema = new mongoose.Schema({
  courseData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Must provide a course ID"],
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  totalCourseReviews: {
    type: Number,
    default: 0,
  },
  totalStudentsEnrolled: {
    type: Object, // This will store both count and user IDs
    default: { count: 0, userIds: [] },
  },
});

// Middleware to dynamically calculate total students enrolled and their IDs
courseAnalyticsSchema.pre(/^find/, async function (next) {
  if (this._conditions && this._conditions.courseData) {
    const courseId = this._conditions.courseData;

    // Fetch all users who bought the course
    const enrolledUsers = await User.find(
      { coursesBought: courseId },
      "_id" // Only select the IDs
    );

    // Update the totalStudentsEnrolled field
    this.totalStudentsEnrolled = {
      count: enrolledUsers.length,
      userIds: enrolledUsers.map((user) => user._id),
    };
  }
  next();
});

const CourseAnalytics = mongoose.model(
  "CourseAnalytics",
  courseAnalyticsSchema
);
module.exports = CourseAnalytics;
