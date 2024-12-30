const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { confirmEmailToken } = require("../controllers/authController");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
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
    emailVerificationToken: {
      type: String,
    },
    emailVerificationExpires: {
      type: Date,
    },
    photo: {
      type: String,
      default: "default.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin", "guest"],
      default: "user",
      select: false,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    },
    passwordConfirm: {
      type: String,
      required: function () {
        return this.isNew; // This is being required only when there is a new document.
      },
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same!",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    reviews: [{ type: mongoose.Schema.ObjectId, ref: "Reviews" }],
    location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      firstAddress: String,
    },
  },
  { timestamps: true }
);

// userSchema.pre(/^find/, function (next) {
//   // 'this' refers to the query
//   this.populate({
//     path: "reviews",
//     select: "rating comment -_id",
//   });

//   next();
// });

userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(
      this.password + process.env.BCRYPT_PW,
      10
    );
    this.passwordConfirm = undefined;

    next();
  } catch (err) {
    console.log(Error`occurred during hashing password:`, err);
    next();
  }
});

userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("email")) {
    this.generateEmailVerificationToken();
  }
  next();
});

// userSchema.pre(/^find/, function (next) {
//   if (!this.getQuery().includeInactive) {
//     // Exclude inactive users unless explicitly included
//     this.find({ active: { $ne: false } });
//   } else {
//     // Remove the flag from the query so it doesn't affect database queries
//     this.setQuery({ ...this.getQuery(), includeInactive: undefined });
//   }
//   next();
// });

userSchema.methods.updatePassword = async function (
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  // Verify current password
  const isPasswordCorrect = bcrypt.compare(currentPassword, this.password);
  if (!isPasswordCorrect) {
    throw new Error("Current password is incorrect.");
  }

  // Check if new passwords match
  if (newPassword !== confirmNewPassword) {
    throw new Error("New passwords do not match.");
  }

  // Update the password
  this.password = newPassword;
  this.passwordConfirm = undefined; // Exclude confirm password
  await this.save();
};

userSchema.methods.generateEmailVerificationToken = function () {
  this.emailVerificationExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
  this.emailVerificationToken = confirmEmailToken(); // Generate a new token
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
