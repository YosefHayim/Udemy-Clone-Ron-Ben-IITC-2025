const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Must provide a comment."],
      minLength: [1, "Comment must be at least 1 character long."],
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseAnalytics", // Reference to a review in CourseAnalytics
      required: [true, "Comment must belong to a review."],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor", // Reference to the Instructor model
      required: [true, "Comment must be associated with an instructor."],
    },
  },
  { timestamps: true }
);

// Pre-save validation to ensure only instructors can comment
// commentSchema.pre("save", async function (next) {
//   const Instructor = mongoose.model("Instructor");
//   const instructor = await Instructor.findById(this.instructor);

//   if (!instructor) {
//     return next(new Error("Only instructors are allowed to post comments."));
//   }

//   next();
// });

const Comments = mongoose.model("Comment", commentSchema);
module.exports = Comments;
