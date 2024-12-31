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
        },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

// Pre-save middleware for URL validation
lessonSchema.pre("save", function (next) {
  const urlRegex = /^(http|https):\/\/[^ "]+$/;

  // Validate the videoUrl field
  if (!urlRegex.test(this.videoUrl)) {
    return next(new Error("Invalid video URL format."));
  }

  // Validate each resource URL
  if (this.resources && this.resources.length > 0) {
    for (const resource of this.resources) {
      if (!urlRegex.test(resource.url)) {
        return next(new Error(`Invalid resource URL format: ${resource.url}`));
      }
    }
  }

  next();
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
