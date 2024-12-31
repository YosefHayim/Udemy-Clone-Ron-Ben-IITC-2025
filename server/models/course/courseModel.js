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
    courseDescription: {
      type: String,
      required: [true, "A course description is required"],
    },
    coursePrice: {
      type: Number,
      required: [true, "Course price must be provided"],
      min: [0, "Price cannot be negative"],
    },
    courseCoupon: {
      type: Number,
      min: 0,
      max: 100,
    },
    courseCategory: {
      courseParentCategory: {
        type: String,
        required: [true, "Parent category is required"],
        enum: Object.keys(courseCategories),
      },
      courseSubCategory: {
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
      courseTopic: {
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
    courseLevel: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
    },
    courseLanguages: {
      type: String,
      required: true,
      enum: ["English", "Spanish", "French", "German", "Other"],
    },
    courseInstructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Instructor is required"],
    },
    lastTimeCourseUpdated: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Courses = mongoose.model("Course", courseSchema);
module.exports = Courses;
