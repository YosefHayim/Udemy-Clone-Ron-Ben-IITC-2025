const mongoose = require("mongoose");

const courseReviewsSchema = new mongoose.Schema(
  {
    courseReview: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: [true, "ID of a course must be provided"],
    },
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
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// courseReviewsSchema.pre(/^find/, function (next) {
//   this.populate("user");
//   this.populate("courseReview");
//   next();
// });

courseReviewsSchema.pre(/^find/, function (next) {
  this.where({ isActive: { $ne: false } }); // Exclude documents with isActive set to false
  next();
});

const courseReviews = mongoose.model("Review", courseReviewsSchema);
module.exports = courseReviews;
