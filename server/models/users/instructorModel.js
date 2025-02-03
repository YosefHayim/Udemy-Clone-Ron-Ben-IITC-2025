const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  // _id: false,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required for instructor personal information."],
  },
  coursesRelatedIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Must have a relationship to a courseId"],
    },
  ],
  backgroundOfInstructor: {
    type: String,
  },
  avgRatingInstructor: {
    type: Number,
    default: 0,
  },
  totalStudents: {
    type: Number,
    default: 0,
  },
  totalCourses: {
    type: Number,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
});

// Middleware to update totalCourses before saving
instructorSchema.pre("save", function (next) {
  this.totalCourses = this.coursesRelatedIds.length;
  next();
});
instructorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "profilePic links bio headline",
  }).populate({
    path: "coursesRelatedIds",
    select:
      "courseName courseInstructor courseDiscountPrice courseFullPrice totalRatings totalCourseDuration courseTag",
  });

  next();
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
