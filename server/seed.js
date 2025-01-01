const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");
const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const CourseAnalytics = require("./models/courses/courseAnalyticsModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const Instructor = require("./models/users/instructorModel");
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
      InstructorComment.deleteMany({}),
      Instructor.deleteMany({}),
    ]);
    console.log("Cleared all collections");

    const users = [];
    const courses = [];
    const sections = [];
    const lessons = [];
    const courseAnalytics = [];
    const reviews = [];
    const instructors = [];

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
    console.log(`Done with users`);

    // Separate instructors and students
    const studentUsers = createdUsers.filter((user) => user.role === "student");
    const instructorUsers = createdUsers.filter(
      (user) => user.role === "instructor"
    );
    console.log(`Done with separate with instructors`);

    // Create Instructors
    for (const user of instructorUsers) {
      instructors.push({
        user: user._id,
        coursesTeaching: [],
      });
    }
    const createdInstructors = await Instructor.insertMany(instructors);
    console.log(`Done with created Instructors`);

    // Create Courses
    for (let i = 0; i < 20; i++) {
      const instructor = faker.helpers.arrayElement(createdInstructors);
      const parentCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories)
      );
      const subCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories[parentCategory].subCategories)
      );
      const topic = faker.helpers.arrayElement(
        courseCategories[parentCategory].subCategories[subCategory]
      );

      courses.push({
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
        courseInstructor: faker.helpers.arrayElement(createdInstructors).user,
        reviews: [],
      });
    }
    const createdCourses = await Course.insertMany(courses);
    console.log(`Done with created Courses`);

    // Assign random courses to students
    for (const user of studentUsers) {
      const purchasedCourses = faker.helpers.arrayElements(
        createdCourses,
        faker.number.int({ min: 1, max: 5 })
      );
      user.coursesBought = purchasedCourses.map((course) => course._id);
      await user.save();
    }
    console.log(`Done with assign random courses to students`);

    // Create Sections for each course
    for (const course of createdCourses) {
      const sectionCount = faker.number.int({ min: 1, max: 5 });
      for (let i = 0; i < sectionCount; i++) {
        const section = await Section.create({
          course: course._id,
          title: faker.lorem.words(4),
          lessons: [],
        });
        sections.push(section); // Store the created section
      }
    }

    // Create Lessons for each section
    for (const section of sections) {
      const lessonCount = faker.number.int({ min: 1, max: 10 });
      for (let j = 0; j < lessonCount; j++) {
        const lesson = await Lesson.create({
          section: section._id, // Assign section ID
          title: faker.lorem.words(3),
          videoUrl: faker.internet.url(),
          duration: faker.number.int({ min: 1, max: 30 }),
          order: j + 1,
        });
        lessons.push(lesson); // Store the created lesson
        section.lessons.push(lesson._id); // Add lesson ID to the section
      }
      // Update the section with total lessons and durations
      section.totalSectionLessons = section.lessons.length;
      section.totalSectionDuration = lessons
        .filter((lesson) => section.lessons.includes(lesson._id))
        .reduce((total, lesson) => total + lesson.duration, 0);
      await section.save(); // Save the updated section
    }
    console.log(`Done with creating lessons for each section`);

    // Create Course Analytics
    for (const course of createdCourses) {
      const enrolledStudents = faker.helpers.arrayElements(
        studentUsers,
        faker.number.int({ min: 1, max: 10 })
      );
      const analytics = {
        course: course._id,
        totalStudentsEnrolled: enrolledStudents.length,
        averageRating: 0, // Placeholder
        totalRatings: 0, // Placeholder
      };
      courseAnalytics.push(analytics);
    }
    const createdAnalytics = await CourseAnalytics.insertMany(courseAnalytics);

    // Link Course Analytics to Courses
    for (const [index, course] of createdCourses.entries()) {
      course.analyticsOfCourse = createdAnalytics[index]._id;
      await course.save();
    }

    // Create Reviews and Comments
    for (const course of createdCourses) {
      const reviewCount = faker.number.int({ min: 5, max: 15 });
      for (let i = 0; i < reviewCount; i++) {
        const reviewer = faker.helpers.arrayElement(studentUsers);
        const review = {
          user: reviewer._id,
          rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          comment: faker.lorem.sentence(),
          likes: faker.number.int({ min: 0, max: 50 }),
          dislikes: faker.number.int({ min: 0, max: 10 }),
        };
        reviews.push(review);

        // Add instructor comments
        const instructor = faker.helpers.arrayElement(createdInstructors);
        for (let j = 0; j < faker.number.int({ min: 1, max: 3 }); j++) {
          await InstructorComment.create({
            instructor: instructor.user,
            review: review._id,
            comment: faker.lorem.sentence(),
          });
        }
      }
    }
    await courseReviews.insertMany(reviews);

    console.log("All data seeded successfully with enhanced relationships!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateUpdatedDummyData();
