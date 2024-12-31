const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Must provide a comment."],
      minLength: [1, "Comment must be at least 1 character long."],
    },
    reviewId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews",
        required: [true, "Comment must belong to a review."],
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: [true, "Comment must be associated with a user."],
      validate: {
        validator: async function (userId) {
          const User = mongoose.model("Users");
          const user = await User.findById(userId);
          return user && user.role === "instructor";
        },
        message: "Only instructors are allowed to post comments.",
      },
    },
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

const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
