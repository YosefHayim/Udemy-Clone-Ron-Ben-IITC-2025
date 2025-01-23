const mongoose = require("mongoose");
const allowedIssueTypes = require("../../utils/reportSubjects");

const reportReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A report must belong to a user who reported the review."],
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: [true, "A review ID is required."],
  },
  issueType: {
    type: String,
    enum: {
      values: Object.keys(allowedIssueTypes),
      message: `Issue type must be one of the following: ${Object.keys(
        allowedIssueTypes
      ).join(", ")}`,
    },
    required: [true, "Issue type is required."],
  },
  issueDetails: {
    type: String,
    required: [true, "Issue details are required."],
  },
});

reportReviewSchema.pre("save", function (next) {
  const d = this.issueType;
  const c = this.issueDetails;
  // console.log(d, c);
  next();
});

const ReportReview = mongoose.model("ReportReview", reportReviewSchema);
module.exports = ReportReview;
