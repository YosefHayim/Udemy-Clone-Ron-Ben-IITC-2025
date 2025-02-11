import mongoose, { Model } from "mongoose";
import allowedIssueTypes from "../../utils/reportSubjects.ts";
import { ReportReviewDocument } from "../../types/types.ts";

const reportReviewSchema = new mongoose.Schema<ReportReviewDocument>({
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

const ReportReview: Model<ReportReviewDocument> = mongoose.model(
  "ReportReview",
  reportReviewSchema
);
export default ReportReview;
