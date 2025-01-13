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
    courseTrailer: {
      type: String,
      required: [true, "A course must have a trailer video."],
    },
    courseDescription: {
      type: String,
      required: [true, "Course must have a description"],
    },
    whoThisCourseIsFor: {
      type: String,
      required: [true, "A course description must have a who is this is for."],
    },
    whatYouWillLearn: {
      type: [String],
      required: [true, "A course must have at least 6 pros"],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length > 6 && v.length < 10;
        },
        message: "WhatYouWillLearn must contain between 6 to 10 sentences",
      },
    },
    courseRequirements: {
      type: [String],
      required: [true, "Course must have requirements for the students."],
    },
    courseRecapInfo: {
      type: String,
      required: [true, "Must provide short recap of the course."],
    },
    courseFullPrice: {
      type: Number,
      required: [true, "Course full price must be provided"],
      min: [0, "Price cannot be negative"],
    },
    courseDiscountPrice: {
      type: Number,
      required: [true, "Course must have a discount price."],
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
    courseInstructorDescription: {
      type: String,
      required: [
        true,
        "Must provide a background description of yourself as instructor",
      ],
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
    totalStudentsEnrolled: {
      students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      count: { type: Number, default: 0 },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    courseTag: {
      type: String,
      enum: ["Bestseller", "Highest Rated", "Hot and New", "New"],
      default: "New",
    },
    sections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    totalRatings: { type: Number, default: 0 },
    totalCourseDuration: {
      type: Number,
      default: 0,
    },
    totalCourseLessons: {
      type: Number,
      default: 0,
    },
    totalCourseSections: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

courseSchema.pre(/^find^/, function (next) {
  this.populate({
    path: "reviews",
    select: "user comment rating",
  })
    .populate({
      path: "courseInstructor",
      select: "fullName",
    })
    .populate("sections");

  next();
});

courseSchema.pre("save", function (next) {
  if (this.isModified("averageRating")) {
    // Round averageRating to 1 decimal place
    this.averageRating = Math.round(this.averageRating * 10) / 10;
  }
  next();
});

courseSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();

  if (update && update.$set && update.$set.averageRating != null) {
    // Round averageRating to 1 decimal place
    update.$set.averageRating = Math.round(update.$set.averageRating * 10) / 10;
  }

  next();
});

courseSchema.pre("save", async function (next) {
  const Section = mongoose.model("Section");
  const sections = await Section.find({ course: this._id }).populate("lessons");

  let totalDuration = 0;
  let totalLessons = 0;

  sections.forEach((section) => {
    totalLessons += section.lessons.length;
    totalDuration += section.lessons.reduce(
      (sum, lesson) => sum + lesson.duration,
      0
    );
  });

  this.totalCourseDuration = totalDuration;
  this.totalCourseLessons = totalLessons;

  next();
});

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

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
