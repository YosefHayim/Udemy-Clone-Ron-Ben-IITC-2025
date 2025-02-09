import mongoose, { Model } from "mongoose";
import { CommentDocument } from "../../../types/types.ts";

const commentSchema = new mongoose.Schema<CommentDocument>(
  {
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: [true, "Comment must be associated with a review of a user."],
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [
        true,
        "Comment must be associated with an user student you reply to.",
      ],
    },
    comment: {
      type: String,
      required: [true, "Must provide a comment."],
      minLength: [1, "Comment must be at least 1 character long."],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Comment must be associated with a user instructor."],
    },
  },
  { timestamps: true }
);

const InstructorComment: Model<CommentDocument> = mongoose.model(
  "Comment",
  commentSchema
);
export default InstructorComment;
