const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required for instructor personal information."],
  },
  coursesRelatedIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
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
    select: "_id profilePic links bio headline",
  });
  next();
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
