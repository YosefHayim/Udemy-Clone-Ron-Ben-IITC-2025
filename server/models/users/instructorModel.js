const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      default: "instructor",
    },
    coursesTeaching: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        default: [],
      },
    ],
  },

  { timestamps: true }
);

instructorSchema.pre(/^find/, function (next) {
  this.populate("user").populate("coursesTeaching");
  next();
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
