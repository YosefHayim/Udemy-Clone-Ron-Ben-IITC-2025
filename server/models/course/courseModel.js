const mongoose = require("mongoose");

// Categories object for Udemy-like platform
const courseCategories = {
  Development: {
    subCategories: {
      "Web Development": ["JavaScript", "HTML", "CSS", "React", "Node.js"],
      "Data Science": [
        "Python",
        "R",
        "SQL",
        "Machine Learning",
        "Deep Learning",
      ],
      "Mobile Development": ["Swift", "Kotlin", "Flutter", "React Native"],
    },
  },
  Business: {
    subCategories: {
      Entrepreneurship: ["Business Strategy", "Leadership", "Startups"],
      Communication: ["Public Speaking", "Writing", "Negotiation"],
      "Project Management": ["Agile", "Scrum", "PMP", "Risk Management"],
    },
  },
  "Finance & Accounting": {
    subCategories: {
      "Accounting & Bookkeeping": [
        "QuickBooks",
        "Financial Statements",
        "Tax Preparation",
      ],
      "Investing & Trading": ["Stock Trading", "Cryptocurrency", "Options"],
      "Personal Finance": [
        "Budgeting",
        "Retirement Planning",
        "Debt Reduction",
      ],
    },
  },
  "IT & Software": {
    subCategories: {
      "IT Certifications": ["AWS Certification", "CompTIA", "Cisco"],
      "Network & Security": [
        "Cybersecurity",
        "Ethical Hacking",
        "Network Administration",
      ],
      Hardware: ["Computer Repair", "IoT", "Raspberry Pi"],
    },
  },
  Design: {
    subCategories: {
      "Graphic Design": ["Photoshop", "Illustrator", "Canva"],
      "UI/UX Design": ["Wireframing", "Prototyping", "Figma", "Sketch"],
      "3D & Animation": ["Blender", "Maya", "3ds Max"],
    },
  },
  Marketing: {
    subCategories: {
      "Digital Marketing": [
        "SEO",
        "Google Ads",
        "Content Marketing",
        "Social Media Marketing",
      ],
      Branding: ["Logo Design", "Brand Identity", "Storytelling"],
      "Analytics & Automation": [
        "Google Analytics",
        "Marketing Automation Tools",
      ],
    },
  },
  Lifestyle: {
    subCategories: {
      "Arts & Crafts": ["Painting", "Drawing", "Knitting"],
      "Health & Fitness": ["Yoga", "Nutrition", "Personal Training"],
      "Travel & Hobbies": ["Travel Planning", "Photography", "Gardening"],
    },
  },
};

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, "To register a course, you must provide a name"],
    },
    description: {
      type: String,
      required: [true, "A course description is required"],
    },
    price: {
      type: Number,
      required: [true, "Course price must be provided"],
      min: [0, "Price cannot be negative"],
    },
    coupon: {
      type: Number, // Discount percentage or amount
      min: 0,
      max: 100,
    },
    category: {
      parentCategory: {
        type: String,
        required: [true, "Parent category is required"],
        enum: Object.keys(courseCategories),
      },
      subCategory: {
        type: String,
        required: [true, "Subcategory is required"],
        validate: {
          validator: function (value) {
            return Object.keys(
              courseCategories[this.category.parentCategory]?.subCategories ||
                {}
            ).includes(value);
          },
          message: "Invalid subcategory for the selected parent category",
        },
      },
      topic: {
        type: String,
        required: [true, "Topic is required"],
        validate: {
          validator: function (value) {
            return (
              courseCategories[this.category.parentCategory]?.subCategories[
                this.category.subCategory
              ]?.includes(value) || false
            );
          },
          message: "Invalid topic for the selected subcategory",
        },
      },
    },
    level: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
    },
    language: {
      type: String,
      required: true,
      enum: ["English", "Spanish", "French", "German", "Other"],
    },
    duration: {
      type: Number, // Duration in hours
      required: true,
    },
    whatYouWillLearn: {
      type: [String], // Array of learning outcomes
    },
    prerequisites: {
      type: [String], // Array of prerequisites
    },
    targetAudience: {
      type: [String], // Array defining ideal audience
    },
    courseContent: [
      {
        sectionTitle: { type: String, required: true },
        lessons: [
          {
            title: { type: String, required: true },
            duration: { type: Number }, // Duration in minutes
          },
        ],
      },
    ],
    thumbnail: {
      type: String, // URL for the course thumbnail
      required: true,
    },
    promoVideo: {
      type: String, // URL for promotional video
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Instructor is required"],
      validate: {
        validator: async function (value) {
          const user = await mongoose.model("users").findById(value);
          return user && user.role === "instructor";
        },
        message: "Assigned instructor must have a role of 'instructor'",
      },
    },
    studentsEnrolled: {
      type: Number,
      default: 0,
      validate: {
        validator: async function () {
          const count = await mongoose
            .model("users")
            .countDocuments({ coursesBought: this._id });
          return count === this.studentsEnrolled;
        },
        message: "Students enrolled count does not match enrolled users.",
      },
    },
    avgRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
        validate: {
          validator: async function (value) {
            const review = await mongoose.model("reviews").findById(value);
            const user = await mongoose.model("users").findById(review.user);
            return user && user.role === "student";
          },
          message:
            "Reviews must be submitted by users with the role of 'student'.",
        },
      },
    ],
  },
  { timestamps: true }
);

const Courses = mongoose.model("courses", courseSchema);

module.exports = Courses;
