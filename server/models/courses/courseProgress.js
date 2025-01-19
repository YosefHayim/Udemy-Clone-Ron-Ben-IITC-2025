const { mongoose } = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
});

const courseProgress = mongoose.model("CourseProgress", courseProgressSchema);
module.exports = courseProgress;
