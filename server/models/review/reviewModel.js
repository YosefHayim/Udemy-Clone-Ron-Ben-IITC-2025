const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "You must provide a rating between 1 and 5."],
      min: [1, "Rating must be at least 1."],
      max: [5, "Rating cannot exceed 5."],
    },
    comment: {
      type: String,
      required: [true, "You must provide a comment."],
      minLength: [1, "Comment must be at least 1 character."],
      maxLength: [250, "Comment cannot exceed 250 characters."], // Extended length for meaningful comments
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user."],
    },
    commentsOfReview: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
        validate: {
          validator: function (value) {
            return Array.isArray(value); // Ensure it's an array
          },
          message: "Comments of review must be an array of valid comment IDs.",
        },
      },
    ],
    likes: {
      type: Number,
      default: 0,
      min: [0, "Likes cannot be negative."],
    },
    dislikes: {
      type: Number,
      default: 0,
      min: [0, "Dislikes cannot be negative."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", reviewSchema);

// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "commentsOfReview",
//     select: "comment -_id",
//   });
//   next();
// });

// reviewSchema.post("save", async function () {
//   const review = this;
//   try {
//     await mongoose.model("Users").findByIdAndUpdate(review.userId, {
//       $push: { reviews: review._id },
//     });
//   } catch (err) {
//     console.error("Error updating user's reviews array:", err);
//   }
// });

const Reviews = mongoose.model("reviews", reviewSchema);
module.exports = Reviews;
