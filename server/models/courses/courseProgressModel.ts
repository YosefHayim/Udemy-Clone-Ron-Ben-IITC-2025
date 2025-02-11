import mongoose, { Model } from "mongoose";
import {
  CourseProgressDocument,
  LessonProgressDocument,
  SectionProgressDocument,
} from "../../types/types.ts";
import { v4 as uuidv4 } from "uuid"; // ✅ Correct import for ESM

const lessonProgressSchema = new mongoose.Schema<LessonProgressDocument>({
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  completed: { type: Boolean, default: false },
  lastWatched: { type: Number, default: 0 }, // Last second viewed
  notes: [
    {
      _id: { type: String, default: () => uuidv4() }, // ✅ Correct, // ✅ Correct fix applied
      seconds: { type: Number, required: true }, // Timestamp of the note
      text: { type: String, required: true }, // Content of the note
    },
  ],
});

const sectionProgressSchema = new mongoose.Schema<SectionProgressDocument>({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
  lessons: [lessonProgressSchema], // Array of lessons with progress
});

const courseProgressSchema = new mongoose.Schema<CourseProgressDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    sections: [sectionProgressSchema], // Array of sections
  },
  { timestamps: true }
);
// courseProgressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const CourseProgress: Model<CourseProgressDocument> = mongoose.model(
  "CourseProgress",
  courseProgressSchema
);
export default CourseProgress;
