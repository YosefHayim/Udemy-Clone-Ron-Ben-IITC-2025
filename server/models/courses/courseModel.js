const mongoose = require("mongoose");
const User = require("../users/userModel");
const courseCategories = require("../../utils/courseCategories");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [
        true,
        "To register a course, you must provide a name for the course",
      ],
    },
    courseDescription: {
      type: String,
      required: [true, "A course description is required"],
    },
    coursePrice: {
      type: Number,
      required: [true, "Course price must be provided"],
      min: [0, "Price cannot be negative"],
    },
    courseParentCategory: {
      type: String,
      required: [true, "Parent category is required"],
      enum: Object.keys(courseCategories),
    },
    courseSubCategory: {
      type: String,
      required: [true, "Subcategory is required"],
      validate: {
        validator: function (value) {
          return Object.keys(
            courseCategories[this.courseParentCategory]?.subCategories || {}
          ).includes(value);
        },
        message: "Invalid subcategory for the selected parent category",
      },
    },
    courseTopic: {
      type: String,
      required: [true, "Topic is required"],
      validate: {
        validator: function (value) {
          return (
            courseCategories[this.courseParentCategory]?.subCategories[
              this.courseSubCategory
            ]?.includes(value) || false
          );
        },
        message: "Invalid topic for the selected subcategory",
      },
    },
    courseLevel: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
    },
    courseLanguages: {
      type: String,
      required: true,
      enum: ["English", "Spanish", "French", "German", "Other"],
    },
    courseInstructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Instructor is required"],
    },
    analyticsOfCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseAnalytics",
    },
    moneyBackGuarantee: {
      type: Date,
      validate: {
        validator: function (value) {
          return value <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        },
        message: "Money-back guarantee date must be within 30 days",
      },
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    totalStudentsEnrolled: {
      students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      count: { type: Number, default: 0 },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    sections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
