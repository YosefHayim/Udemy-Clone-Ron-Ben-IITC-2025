const { mongoose } = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Must provide a user id to start course progress"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Must provide a course id to start course progress"],
  },
});

courseProgressSchema.index(
  { user: 1, course: 1 },
  { unique: true, message: "This user already has progress for this course." }
);

courseProgressSchema.pre(/^find/, function (next) {
  this.populate("course");
  next();
});

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);
module.exports = CourseProgress;
