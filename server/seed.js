const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");
const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const CourseAnalytics = require("./models/courses/courseAnalyticsModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const courseReviews = require("./models/reviews/courseReviewModel");
const connectDb = require("./config/connectDb");

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

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();

    // Clear all collections
    await Promise.all([
      User.deleteMany({}),
      Course.deleteMany({}),
      Section.deleteMany({}),
      Lesson.deleteMany({}),
      CourseAnalytics.deleteMany({}),
      courseReviews.deleteMany({}),
      InstructorComment.deleteMany({}), // Still used for comments
    ]);
    console.log("Cleared all collections");

    const users = [];
    const courses = [];
    const sections = [];
    const lessons = [];
    const reviews = [];

    // Create Users
    for (let i = 0; i < 10; i++) {
      const hashedPassword = await bcrypt.hash("password123", 10);
      users.push({
        fName: faker.person.firstName(),
        lName: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        passwordConfirm: hashedPassword,
        role: faker.helpers.arrayElement(["student", "instructor"]),
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log(`Users created successfully.`);

    // Separate instructors and students
    const studentUsers = createdUsers.filter((user) => user.role === "student");
    const instructorUsers = createdUsers.filter(
      (user) => user.role === "instructor"
    );

    // Create Courses
    for (let i = 0; i < 20; i++) {
      const instructor = faker.helpers.arrayElement(instructorUsers);
      const parentCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories)
      );
      const subCategories = courseCategories[parentCategory].subCategories;
      const subCategory = faker.helpers.arrayElement(
        Object.keys(subCategories)
      );
      const topic = faker.helpers.arrayElement(subCategories[subCategory]);

      const course = await Course.create({
        courseName: faker.lorem.words(3),
        courseDescription: faker.lorem.paragraph(),
        coursePrice: faker.commerce.price(10, 500, 2),
        courseParentCategory: parentCategory,
        courseSubCategory: subCategory,
        courseTopic: topic,
        courseLevel: faker.helpers.arrayElement([
          "Beginner",
          "Intermediate",
          "Advanced",
        ]),
        courseLanguages: faker.helpers.arrayElement(["English", "Spanish"]),
        courseInstructor: instructor._id, // Link directly to instructor user
        sections: [],
        lessons: [],
        reviews: [],
      });

      courses.push(course);
    }
    console.log(`Courses created successfully.`);

    // Assign random courses to students
    for (const user of studentUsers) {
      const purchasedCourses = faker.helpers.arrayElements(
        courses,
        faker.number.int({ min: 1, max: 5 })
      );
      user.coursesBought = purchasedCourses.map((course) => course._id);
      await user.save();
    }
    console.log(`Courses assigned to students.`);

    // Create Sections for each course
    for (const course of courses) {
      const sectionCount = faker.number.int({ min: 1, max: 5 });
      for (let i = 0; i < sectionCount; i++) {
        const section = await Section.create({
          course: course._id,
          title: faker.lorem.words(4),
          lessons: [],
        });
        sections.push(section);
        course.sections.push(section._id);
      }
      await course.save();
    }

    // Create Lessons for each section
    for (const section of sections) {
      const lessonCount = faker.number.int({ min: 1, max: 10 });
      for (let j = 0; j < lessonCount; j++) {
        const lesson = await Lesson.create({
          section: section._id,
          title: faker.lorem.words(3),
          videoUrl: faker.internet.url(),
          duration: faker.number.int({ min: 1, max: 30 }),
          order: j + 1,
        });
        lessons.push(lesson);
        section.lessons.push(lesson._id);

        // Link lessons to courses
        const course = courses.find((c) => c._id.equals(section.course));
        if (course) course.lessons.push(lesson._id);
      }
      await section.save();
    }
    console.log(`Sections and lessons created successfully.`);

    // Create Course Analytics
    for (const course of courses) {
      const enrolledStudents = faker.helpers.arrayElements(
        studentUsers,
        faker.number.int({ min: 1, max: 10 })
      );
      const validReviews = reviews.filter((r) =>
        course.reviews.includes(r._id)
      );
      const totalRatings = validReviews.length;
      const averageRating = totalRatings
        ? validReviews.reduce((sum, r) => sum + r.rating, 0) / totalRatings
        : 0;

      const analytics = await CourseAnalytics.create({
        courseData: course._id, // Corrected field name
        totalStudentsEnrolled: enrolledStudents.length,
        averageRating,
        totalRatings,
      });
      course.analyticsOfCourse = analytics._id; // Link analytics to course
      await course.save();
    }
    console.log(`Course analytics created successfully.`);

    // Create Reviews and Comments
    for (const course of courses) {
      const reviewCount = faker.number.int({ min: 5, max: 15 });
      for (let i = 0; i < reviewCount; i++) {
        const reviewer = faker.helpers.arrayElement(studentUsers);
        const review = await courseReviews.create({
          user: reviewer._id,
          rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          comment: faker.lorem.sentence(),
          likes: faker.number.int({ min: 0, max: 50 }),
          dislikes: faker.number.int({ min: 0, max: 10 }),
        });
        reviews.push(review);
        course.reviews.push(review._id);
        await course.save();

        // Add comments to reviews
        for (let j = 0; j < faker.number.int({ min: 1, max: 3 }); j++) {
          const commenter = faker.helpers.arrayElement(studentUsers); // Valid student user
          await InstructorComment.create({
            student: commenter._id,
            comment: faker.lorem.sentence(),
            instructor: faker.helpers.arrayElement(instructorUsers)._id, // Reference instructor user
            review: review._id,
          });
        }
      }
    }

    console.log("All dummy data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateUpdatedDummyData();
