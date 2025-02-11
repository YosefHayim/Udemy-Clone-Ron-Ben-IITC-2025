import mongoose, { Schema, Model, Query } from "mongoose";
import { InstructorDocument } from "../../types/types.ts";

// Define Mongoose Schema
const instructorSchema = new Schema<InstructorDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required for instructor personal information."],
    },
    coursesRelatedIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: [true, "Must have a relationship to a courseId"],
      },
    ],
    backgroundOfInstructor: { type: String },
    avgRatingInstructor: { type: Number, default: 0 },
    totalStudents: { type: Number, default: 0 },
    totalCourses: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Middleware to update totalCourses before saving
instructorSchema.pre<InstructorDocument>("save", function (next) {
  this.totalCourses = this.coursesRelatedIds.length;
  next();
});

// Middleware to auto-populate related fields
instructorSchema.pre(
  /^find/,
  function (this: Query<any, InstructorDocument>, next) {
    this.populate({
      path: "userId",
      select: "fullName profilePic links bio headline",
    }).populate({
      path: "coursesRelatedIds",
      select:
        "courseName courseInstructor courseDiscountPrice courseFullPrice totalRatings totalCourseDuration courseTag courseImg",
    });

    next();
  }
);

// Define and Export Instructor Model
const Instructor: Model<InstructorDocument> =
  mongoose.model<InstructorDocument>("Instructor", instructorSchema);

export default Instructor;
