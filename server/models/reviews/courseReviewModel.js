const mongoose = require("mongoose");

const courseReviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user."],
    },
    courseReview: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: [true, "ID of a course must be provided"],
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
      users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      count: { type: Number, default: 0 },
    },
    dislikes: {
      users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      count: { type: Number, default: 0 },
    },
    reports: {
      entries: [{ type: mongoose.Schema.Types.ObjectId, ref: "ReportReview" }],
      count: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const courseReviews = mongoose.model("Review", courseReviewsSchema);
module.exports = courseReviews;
