const mongoose = require("mongoose");

const courseReviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user."],
    },
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
      maxLength: [250, "Comment cannot exceed 250 characters."],
    },
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

courseReviewsSchema.pre(/^find/, function (next) {
  this.populate("user");
  next();
});

const courseReviews = mongoose.model("Review", courseReviewsSchema);
module.exports = courseReviews;
