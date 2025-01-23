const connectDb = require("./config/connectDb");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const courseReviews = require("./models/reviews/courseReviewModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const ReportReview = require("./models/reviews/reportReviewModel");
const User = require("./models/users/userModel");

const deleteDb = async () => {
  try {
    connectDb();
    // Clear collections
    await Promise.all([
      User.deleteMany(),
      Course.deleteMany(),
      Section.deleteMany(),
      Lesson.deleteMany(),
      courseReviews.deleteMany(),
      InstructorComment.deleteMany(),
      ReportReview.deleteMany(),
    ]);
    // console.log("Cleared all collections");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

deleteDb();
