const mongoose = require("mongoose");
const validator = require("validator");
const supportedCountries = require("../../utils/supportedCountries");
const languagesToChoose = require("../../utils/languagesToChoose");
const courseCategories = require("../../utils/courseCategories");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please tell us your first name!"],
    },
    headline: {
      type: String,
    },
    bio: {
      type: String,
      maxLength: [200, "bio cannot exceed 200 characters."],
    },
    country: {
      type: String,
      enum: supportedCountries,
      required: [
        false,
        `Must provide a country to a user from the provided list: ${supportedCountries}`,
      ],
    },
    preferredLanguage: {
      type: String,
      enum: languagesToChoose,
      default: "english",
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
      lowercase: true,
      default: false,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationExpires: {
      type: Date,
    },
    profilePic: {
      type: String,
      default: "/default-user-profile.svg",
    },
    authProvider: {
      type: String,
    },
    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },
    temporaryCode: {
      type: Number,
    },
    temporaryCodeExpiresAt: { type: Date, index: { expires: "15m" } },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    udemyCredits: {
      type: Number,
      default: 0,
    },
    subscriptionPlan: {
      type: {
        type: String,
        enum: ["monthly", "yearly"],
      },
      subscriptionPrice: {
        type: Number,
        required: true,
        default: function () {
          return this.subscriptionPlan.type === "yearly" ? 66 * 12 : 95;
        },
      },
      isSubscriptionActive: {
        type: Boolean,
        default: false,
      },
      startDate: {
        type: Date,
        default: Date.now,
      },
      endDate: {
        type: Date,
        required: function () {
          return this.isSubscriptionActive;
        },
      },
    },
    wishlistCourses: [{ type: mongoose.Schema.ObjectId, ref: "Course" }],
    coursesBought: [
      {
        _id: false,
        courseName: {
          type: String,
          required: [true, "Course must have a related name."],
        },
        courseId: {
          type: mongoose.Schema.ObjectId,
          ref: "Course",
          required: [true, "Course ID is required"],
        },
        boughtAt: { type: Date, default: Date.now },
        coursePrice: { type: Number, default: 0 },
      },
    ],
    fieldLearning: {
      type: [String], // Change to an array of strings
      enum: Object.keys(courseCategories),
      validate: {
        validator: function (values) {
          return values.every((val) =>
            Object.keys(courseCategories).includes(val)
          );
        },
        message: (props) =>
          `${props.value} is not a valid fieldLearning category`,
      },
    },
    coursesCreated: [{ type: mongoose.Schema.ObjectId, ref: "Course" }],
    payments: [{ type: mongoose.Schema.ObjectId, ref: "Payment" }],
    certificatesEarned: [
      { type: mongoose.Schema.ObjectId, ref: "Certificate" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

userSchema.pre(/^find/, function (next) {
  this.populate("cou");
});

// Pre-save hook to remove duplicate course entries
userSchema.pre("save", function (next) {
  // Create a set to ensure uniqueness based on the `course` field
  const uniqueCourses = new Map();
  this.coursesBought.forEach((item) => {
    uniqueCourses.set(item.course.toString(), item);
  });

  // Convert the map back to an array
  this.coursesBought = Array.from(uniqueCourses.values());
  next();
});

// If email is new it will generate a verification token to user
userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("email")) {
    this.generateEmailVerificationToken();
  }
  next();
});

// generate email verification token
userSchema.methods.generateEmailVerificationToken = function () {
  this.emailVerificationExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
  this.emailVerificationToken = confirmEmailToken(); // Generate a new token
};

const User = mongoose.model("User", userSchema);
module.exports = User;
