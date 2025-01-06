const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: [true, "Lesson must belong to a section."],
    },
    title: {
      type: String,
      required: [true, "A lesson must have a title."],
    },
    videoUrl: {
      type: String,
      required: [true, "A lesson must have a video URL."],
      validate: {
        validator: function (value) {
          return /^(http|https):\/\/[^ "]+$/.test(value);
        },
        message: "Invalid video URL format.",
      },
    },
    duration: {
      type: Number,
      required: [true, "A lesson must have a duration."],
      min: [1, "Duration must be at least 1 minute."],
    },
    order: {
      type: Number,
      required: [true, "A lesson must have an order."],
      min: [1, "Order must start from 1."],
      validate: {
        validator: async function (value) {
          const lessonCount = await this.constructor.countDocuments({
            section: this.section,
            order: value,
          });
          return lessonCount === 0;
        },
        message: "Order value must be unique within a section.",
      },
    },
    resources: [
      {
        title: {
          type: String,
          required: [true, "Resource must have a title."],
        },
        url: {
          type: String,
          required: [true, "Resource must have a URL."],
          validate: {
            validator: function (value) {
              return /^(http|https):\/\/[^ "]+$/.test(value);
            },
            message: "Invalid resource URL format.",
          },
        },
        type: {
          type: String,
          enum: ["PDF", "Video", "Image", "Link"],
          default: "Link",
        },
      },
    ],
  },
  { timestamps: true }
);

// Validate each resource URL
lessonSchema.pre("save", function (next) {
  if (this.resources && this.resources.length > 0) {
    for (const resource of this.resources) {
      if (!urlRegex.test(resource.url)) {
        return next(new Error(`Invalid resource URL format: ${resource.url}`));
      }
    }
  }

  next();
});

// Middleware to ensure unique order within a section
lessonSchema.pre("save", async function (next) {
  const existingLesson = await this.constructor.findOne({
    section: this.section,
    order: this.order,
  });
  if (existingLesson && existingLesson._id.toString() !== this._id.toString()) {
    return next(new Error("Order must be unique within the section."));
  }
  next();
});

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
