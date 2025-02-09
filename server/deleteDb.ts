import connectDb from "./config/connectDb.ts";
import Course from "./models/courses/courseModel.ts";
import Lesson from "./models/courses/lessonModel.ts";
import Section from "./models/courses/sectionModel.ts";
import courseReviews from "./models/reviews/courseReviewModel.ts";
import InstructorComment from "./models/reviews/instructorCommentModel.ts";
import ReportReview from "./models/reviews/reportReviewModel.ts";
import User from "./models/users/userModel.ts";

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

export default deleteDb;
