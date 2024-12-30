const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Must provide a comment"],
    },
    reviewId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews",
        required: [true, "Comment must belong to a review"],
      },
    ],
  },
  { timestamps: true }
);

// commentSchema.pre(/^find/, function (next) {
//   // 'this' refers to the query
//   this.populate({
//     path: "reviewId",
//     select: "comment",
//   });
//   next();
// });

// commentSchema.post("save", async function () {
//   const comment = this; // 'this' refers to the comment being saved
//   try {
//     await mongoose.model("Reviews").findByIdAndUpdate(comment.reviewId, {
//       $push: { commentsOfReview: comment._id },
//     });
//   } catch (err) {
//     console.error("Error updating comment reply to the review:", err);
//   }
// });

const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment;
