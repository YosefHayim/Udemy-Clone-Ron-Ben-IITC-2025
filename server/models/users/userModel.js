const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const supportedCountries = require("../../utils/supportedCountries");
const languagesToChoose = require("../../utils/languagesToChoose");

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
    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
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
        course: { type: mongoose.Schema.ObjectId, ref: "Course" },
        boughtAt: { type: Date, default: Date.now },
      },
    ],
    coursesCreated: [{ type: mongoose.Schema.ObjectId, ref: "Course" }],
    orders: [{ type: mongoose.Schema.ObjectId, ref: "Order" }],
    payments: [{ type: mongoose.Schema.ObjectId, ref: "Payment" }],
    certificatesEarned: [
      { type: mongoose.Schema.ObjectId, ref: "Certificate" },
    ],
    coursesProgress: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: [true, "Progress must be linked to a course."],
        },
        lessons: [
          {
            lessonId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Lesson",
              required: [true, "Progress must specify a lesson."],
            },
            isDone: { type: Boolean, default: false },
            lastPlayedVideoTime: { type: Number, default: 0 },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
  // Only hash the password if it is new or has been modified
  if (!this.isNew && !this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(
      this.password + process.env.BCRYPT_PW,
      10
    );

    next();
  } catch (err) {
    console.error(`Error occurred during hashing password:`, err);
    next(err);
  }
});

// If email is new it will generate a verification token to user
userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("email")) {
    this.generateEmailVerificationToken();
  }
  next();
});

// method to update password
userSchema.methods.updatePassword = async function (
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  // Verify current password
  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    this.password
  );
  if (!isPasswordCorrect) {
    throw new Error("Current password is incorrect.");
  }

  // Check if new passwords match
  if (newPassword !== confirmNewPassword) {
    throw new Error("New passwords do not match.");
  }

  // Update the password
  this.password = newPassword;
  await this.save();
};

// generate email verification token
userSchema.methods.generateEmailVerificationToken = function () {
  this.emailVerificationExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
  this.emailVerificationToken = confirmEmailToken(); // Generate a new token
};

const User = mongoose.model("User", userSchema);
module.exports = User;
