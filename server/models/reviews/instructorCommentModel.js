const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [
        true,
        "Comment must be associated with an student you reply to.",
      ],
    },
    comment: {
      type: String,
      required: [true, "Must provide a comment."],
      minLength: [1, "Comment must be at least 1 character long."],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Comment must be associated with an instructor."],
    },
  },
  { timestamps: true }
);

commentSchema.pre(/^find/, function (next) {
  this.populate("instructor").populate("student");
  next();
});

const InstructorComment = mongoose.model("Comment", commentSchema);
module.exports = InstructorComment;
