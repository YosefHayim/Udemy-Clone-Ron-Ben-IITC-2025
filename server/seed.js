const mongoose = require("mongoose");
const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");

const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const CourseAnalytics = require("./models/courses/courseAnalyticsModel");
const Comment = require("./models/reviews/commentModel");
const Instructor = require("./models/users/instructorModel");
const connectDb = require("./config/connectDb");

const generateDummyData = async () => {
  try {
    await connectDb();

    // Clear all collections
    await User.deleteMany({});
    await Course.deleteMany({});
    await Lesson.deleteMany({});
    await Section.deleteMany({});
    await CourseAnalytics.deleteMany({});
    await Comment.deleteMany({});
    await Instructor.deleteMany({});

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
          Marketing: ["SEO", "Content Marketing", "Social Media"],
          Communication: ["Public Speaking", "Writing", "Negotiation"],
          "Project Management": ["Agile", "Scrum", "PMP", "Risk Management"],
        },
      },
    };

    // Generate Users
    const users = [];
    for (let i = 0; i < 20; i++) {
      const password = "password123";
      const hashedPassword = await bcrypt.hash(password, 10);

      users.push({
        fName: faker.person.firstName(),
        lName: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        passwordConfirm: hashedPassword,
        emailVerified: faker.datatype.boolean(),
        role: faker.helpers.arrayElement(["student", "instructor"]),
      });
    }
    const createdUsers = await User.insertMany(users);

    // Generate Courses
    const courses = [];
    for (let i = 0; i < 10; i++) {
      const instructor = faker.helpers.arrayElement(
        createdUsers.filter((user) => user.role === "instructor")
      );
      const parentCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories)
      );
      const subCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories[parentCategory].subCategories)
      );

      const topic = faker.helpers.arrayElement(
        courseCategories[parentCategory].subCategories[subCategory]
      );

      if (!topic) {
        throw new Error(
          `Invalid topic generation for ${subCategory} under ${parentCategory}`
        );
      }

      courses.push({
        courseName: faker.lorem.words(3),
        courseDescription: faker.lorem.paragraph(),
        coursePrice: faker.commerce.price(10, 500, 2),
        courseLevel: faker.helpers.arrayElement([
          "Beginner",
          "Intermediate",
          "Advanced",
          "All Levels",
        ]),
        courseLanguages: faker.helpers.arrayElement([
          "English",
          "Spanish",
          "French",
          "German",
        ]),
        courseParentCategory: parentCategory, // Flattened structure
        courseSubCategory: subCategory, // Flattened structure
        courseTopic: topic, // Flattened structure
        courseInstructor: instructor._id,
        moneyBackGuarantee: new Date(
          Date.now() +
            faker.number.int({ min: 1, max: 30 }) * 24 * 60 * 60 * 1000
        ), // Valid date within 30 days
      });
    }
    const createdCourses = await Course.insertMany(courses);

    // Generate Course Analytics
    const analytics = [];
    for (let course of createdCourses) {
      const newAnalytics = new CourseAnalytics({
        course: course._id,
        totalStudentsEnrolledInCourse: faker.helpers.arrayElement(
          createdUsers.filter((user) => user.role === "student")
        )._id,
        averageRating: course._id, // Referencing the `Course` document for ObjectId
        totalRatings: course._id, // Referencing the `Course` document for ObjectId
        TotalCourseReviews: Array.from({ length: 5 }).map(() => ({
          user: faker.helpers.arrayElement(createdUsers)._id,
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentence(),
          createdAt: faker.date.recent(),
        })),
      });

      analytics.push(newAnalytics);
    }
    const createdAnalytics = await CourseAnalytics.insertMany(analytics);

    // Generate Instructors
    const instructors = [];
    for (let i = 0; i < 5; i++) {
      const instructorUser = faker.helpers.arrayElement(
        createdUsers.filter((user) => user.role === "instructor")
      );

      instructors.push({
        user: instructorUser._id,
        totalCourses: faker.number.int({ min: 1, max: 10 }),
        totalStudentsTaught: faker.helpers.arrayElement(createdAnalytics)._id,
        averageRating: faker.helpers.arrayElement(createdAnalytics)._id,
        totalRatings: faker.helpers.arrayElement(createdAnalytics)._id,
        reviews: [faker.helpers.arrayElement(createdAnalytics)._id],
      });
    }
    const createdInstructors = await Instructor.insertMany(instructors);

    // Generate Sections
    const sections = [];
    for (let i = 0; i < 15; i++) {
      sections.push({
        course: faker.helpers.arrayElement(createdCourses)._id,
        title: faker.lorem.words(2),
      });
    }
    const createdSections = await Section.insertMany(sections);

    // Generate Lessons
    const lessons = [];
    for (let i = 0; i < 50; i++) {
      lessons.push({
        section: faker.helpers.arrayElement(createdSections)._id,
        title: faker.lorem.words(3),
        videoUrl: faker.internet.url(),
        duration: faker.number.int({ min: 5, max: 60 }),
        order: i + 1,
        resources: [
          {
            title: faker.lorem.words(2),
            url: faker.internet.url(),
          },
        ],
      });
    }
    await Lesson.insertMany(lessons);

    // Generate Comments
    const comments = [];
    for (let i = 0; i < 20; i++) {
      comments.push({
        comment: faker.lorem.sentence(),
        review: faker.helpers.arrayElement(createdAnalytics)._id,
        instructor: faker.helpers.arrayElement(createdInstructors)._id,
      });
    }
    await Comment.insertMany(comments);

    console.log("All dummy data generated successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateDummyData();
