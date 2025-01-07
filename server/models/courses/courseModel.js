const mongoose = require("mongoose");
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
    courseImg: {
      type: String,
      required: [
        false,
        "To register a course, you must provide an image for the course.",
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
    category: {
      type: String,
      required: [true, "Parent category is required"],
      enum: Object.keys(courseCategories),
    },
    subCategory: {
      type: String,
      required: [true, "Subcategory is required"],
      validate: {
        validator: function (value) {
          return Object.keys(
            courseCategories[this.category]?.subCategories || {}
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
            courseCategories[this.category]?.subCategories[
              this.subCategory
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
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

// Pre-save middleware to update student count
courseSchema.pre("save", function (next) {
  if (
    this.totalStudentsEnrolled &&
    Array.isArray(this.totalStudentsEnrolled.students)
  ) {
    this.totalStudentsEnrolled.count =
      this.totalStudentsEnrolled.students.length;
  } else {
    this.totalStudentsEnrolled = { students: [], count: 0 };
  }
  next();
});

courseSchema.pre("remove", async function (next) {
  const Section = mongoose.model("Section");
  const Lesson = mongoose.model("Lesson");
  const Review = mongoose.model("Review");

  if (this.sections && this.sections.length > 0) {
    await Section.deleteMany({ _id: { $in: this.sections } });
  }
  if (this.lessons && this.lessons.length > 0) {
    await Lesson.deleteMany({ _id: { $in: this.lessons } });
  }
  if (this.reviews && this.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: this.reviews } });
  }
  next();
});

// Pre-find middleware to populate related fields
courseSchema.pre(/^find/, function (next) {
  this.populate("reviews")
    .populate("courseInstructor", "fullName email -_id")
    .populate({
      path: "sections",
      populate: {
        path: "lessons",
        options: { retainNullValues: true },
      },
    });
  next();
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
