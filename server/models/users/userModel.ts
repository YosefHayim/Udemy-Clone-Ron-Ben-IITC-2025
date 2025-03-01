import mongoose, { Schema, Model } from "mongoose";
import validator from "validator";
import supportedCountries from "../../utils/supportedCountries.ts";
import languagesToChoose from "../../utils/languagesToChoose.ts";
import courseCategories from "../../utils/courseCategories.ts";
import { UserDocument } from "../../types/types.ts";

// Define Mongoose Schema
const userSchema = new Schema<UserDocument>(
  {
    fullName: {
      type: String,
      required: [true, "Please tell us your first name!"],
    },
    headline: { type: String },
    bio: {
      type: String,
      maxLength: [200, "Bio cannot exceed 200 characters."],
    },
    country: {
      type: String,
      enum: supportedCountries,
      required: false,
    },
    preferredLanguage: {
      type: String,
      enum: languagesToChoose,
      default: "English",
    },
    links: {
      website: { type: String },
      xPlatform: { type: String },
      facebook: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: { type: String, default: "default-user-profile.svg" },
    authProvider: { type: String },
    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },
    temporaryCode: {
      type: Number,
      maxLength: [6, "Temporary code can only be 6 digits."],
    },
    temporaryCodeExpiresAt: { type: Date },
    active: { type: Boolean, default: true, select: false },
    udemyCredits: { type: Number, default: 0 },
    subscriptionPlan: {
      type: {
        type: String,
        enum: ["monthly", "yearly"],
      },
      subscriptionPrice: {
        type: Number,
        required: true,
        default: function (this: UserDocument) {
          return this.subscriptionPlan.type === "yearly" ? 66 * 12 : 95;
        },
      },
      isSubscriptionActive: { type: Boolean, default: false },
      startDate: { type: Date, default: Date.now },
      endDate: {
        type: Date,
        required: function (this: UserDocument) {
          return this.subscriptionPlan.isSubscriptionActive;
        },
      },
    },
    wishlistCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    coursesBought: [
      {
        _id: false,
        courseName: {
          type: String,
          required: [true, "Course must have a related name."],
        },
        courseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
        boughtAt: { type: Date, default: Date.now },
        coursePrice: { type: Number, default: 0 },
      },
    ],
    fieldLearning: {
      type: [String],
      enum: Object.keys(courseCategories),
      validate: {
        validator: function (values: string[]) {
          return values.every((val) =>
            Object.keys(courseCategories).includes(val)
          );
        },
        message: (props: { value: string }) =>
          `${props.value} is not a valid fieldLearning category`,
      },
    },
    coursesCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
    certificatesEarned: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Certificate" },
    ],
  },
  { timestamps: true }
);

// Pre-save Hook: Remove Duplicate Course Entries
userSchema.pre<UserDocument>("save", function (next) {
  const uniqueCourses = new Map<string, any>();
  this.coursesBought.forEach((item) => {
    uniqueCourses.set(item.courseId.toString(), item);
  });
  this.coursesBought = Array.from(uniqueCourses.values());
  next();
});

// Define and Export User Model
const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  userSchema
);
export default User;
