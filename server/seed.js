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

const generateDummyData = async () => {
  try {
    await connectDb();

    // Clear all collections
    await Promise.all([
      User.deleteMany({}),
      courseReviews.deleteMany({}),
      Course.deleteMany({}),
      Lesson.deleteMany({}),
      Section.deleteMany({}),
      CourseAnalytics.deleteMany({}),
      InstructorComment.deleteMany({}),
      Instructor.deleteMany({}),
    ]);
    console.log("Cleared all collections");

    const lessons = [];
    const sections = [];
    const users = [];
    const courses = [];
    const sectionLessons = [];
    const courseAnalytics = [];
    const dummyReviews = [];
    const comments = [];

    // Generate Users
    for (let i = 0; i < 10; i++) {
      const password = "password123";
      const hashedPassword = await bcrypt.hash(password, 10);

      users.push({
        fName: faker.person.firstName(),
        lName: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        photo: faker.image.avatar(),
        password: hashedPassword,
        passwordConfirm: hashedPassword,
        bio: faker.person.bio(),
        emailVerified: faker.datatype.boolean(),
        preferredLanguage: faker.helpers.arrayElement([
          "english",
          "deutsch",
          "espanol",
        ]),
        role: faker.helpers.arrayElement(["student", "instructor", "student"]),
        active: true,
        links: {
          xPlatform: `https://x.com/?`,
          facebook: `https://www.facebook.com/?`,
          linkedin: `https://www.linkedin.com/in/`,
          youtube: `https://x.com/?`,
        },
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log("Users seeded successfully");

    const instructors = createdUsers.filter(
      (user) => user.role === "instructor"
    );
    for (let i = 0; i < 20; i++) {
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
        courseInstructor: instructor._id,
        // AnalyticsOfCourse is later pushed
        moneyBackGuarantee: new Date(
          Date.now() +
            faker.number.int({ min: 1, max: 30 }) * 24 * 60 * 60 * 1000
        ),
        reviews: [],
      });
    }

    const createdCourses = await Course.insertMany(courses);
    console.log("Courses seeded successfully");

    // Assign random instructors to courses
    const courseInstructorAssignments = createdCourses.map((course) => {
      const instructor = faker.helpers.arrayElement(
        createdUsers.filter((user) => user.role === "instructor")
      );

      course.courseInstructor = instructor._id;
      instructor.coursesCreated.push(course._id); // Track created courses
      return course;
    });

    await Promise.all([
      ...courseInstructorAssignments.map((course) => course.save()),
      ...createdUsers.map((user) => user.save()),
    ]);
    console.log("Random instructors assigned to courses.");

    // Assign Courses to Users as 'coursesBought'
    for (const user of createdUsers) {
      // Randomly assign 1 to 5 courses to each user
      const purchasedCourses = faker.helpers.arrayElements(
        createdCourses,
        faker.number.int({ min: 1, max: 5 })
      );

      // Map the course IDs and assign to the user
      const purchasedCourseIds = purchasedCourses.map((course) => course._id);

      // Update the user's coursesBought
      await User.findByIdAndUpdate(user._id, {
        coursesBought: purchasedCourseIds,
      });
    }
    console.log("Courses assigned to users successfully");

    // Generate Sections and Lessons
    for (const course of createdCourses) {
      const sectionCount = faker.number.int({ min: 1, max: 5 });
      for (let i = 0; i < sectionCount; i++) {
        const section = await Section.create({
          course: course._id,
          title: faker.lorem.words(4),
          totalSectionDuration: 0,
          totalSectionLessons: 0,
          lessons: [],
        });

        const lessonCount = faker.number.int({ min: 1, max: 10 });
        for (let j = 0; j < lessonCount; j++) {
          const lesson = await Lesson.create({
            section: section._id,
            title: faker.lorem.words(3),
            videoUrl: faker.internet.url(),
            duration: faker.number.int({ min: 1, max: 30 }),
            order: j + 1,
            resources: [
              {
                title: faker.lorem.words(2),
                url: faker.internet.url(),
              },
            ],
          });

          sectionLessons.push(lesson._id);
        }

        section.totalSectionLessons = sectionLessons.length;
        section.totalSectionDuration = sectionLessons.reduce(
          (total, lessonId) => {
            const lesson = lessons.find((lesson) => lesson._id === lessonId);
            return total + (lesson?.duration || 0);
          },
          0
        );
        await section.save();
      }
    }
    console.log("Sections and lessons seeded successfully");

    // Generate Course Analytics and Reviews
    for (const course of createdCourses) {
      const enrolledStudents = faker.helpers.arrayElements(
        createdUsers.filter((user) => user.role === "student"),
        faker.number.int({ min: 1, max: 50 })
      );

      const reviews = [];
      const numberOfReviews = faker.number.int({ min: 5, max: 20 });

      // Generate reviews for the course
      for (let i = 0; i < numberOfReviews; i++) {
        const reviewer = faker.helpers.arrayElement(enrolledStudents);

        const review = await courseReviews.create({
          user: reviewer._id,
          rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          comment: faker.lorem.sentences(faker.number.int({ min: 1, max: 3 })),
          likes: faker.number.int({ min: 0, max: 100 }),
          dislikes: faker.number.int({ min: 0, max: 50 }),
        });

        reviews.push(review._id);
      }

      // Calculate average rating and total ratings for analytics
      const totalRatings = reviews.length;
      const averageRating =
        totalRatings > 0
          ? (await courseReviews.find({ _id: { $in: reviews } })).reduce(
              (sum, review) => sum + review.rating,
              0
            ) / totalRatings
          : 0;

      // Create analytics for the course
      const analytics = await CourseAnalytics.create({
        course: course._id,
        totalStudentsEnrolled: enrolledStudents.map((user) => user._id),
        averageRating: averageRating,
        totalRatings: totalRatings.length,
        TotalCourseReviews: reviews.length,
      });

      // Update the course with the analytics reference
      await Course.findByIdAndUpdate(course._id, {
        analyticsOfCourse: analytics._id,
      });

      courseAnalytics.push(analytics._id);
    }
    console.log("Course analytics and reviews seeded successfully");

    // Generate Comments for Reviews
    for (const analyticsId of courseAnalytics) {
      const analytics = await CourseAnalytics.findById(analyticsId).populate(
        "TotalCourseReviews"
      );
      const relatedReviews = analytics.TotalCourseReviews; // Get full review documents

      for (const review of relatedReviews) {
        const instructor = faker.helpers.arrayElement(instructors); // Random instructor
        for (let i = 0; i < faker.number.int({ min: 2, max: 5 }); i++) {
          const comment = await InstructorComment.create({
            comment: faker.lorem.sentence(),
            review: review._id, // Link comment to the review
            instructor: instructor._id, // Link to a random instructor
          });
          comments.push(comment._id);
        }
      }
    }

    console.log("Comments seeded successfully");

    // Generate Instructors with Analytics
    for (const instructor of instructors) {
      const instructorAnalytics = faker.helpers.arrayElement(courseAnalytics);

      await Instructor.create({
        user: instructor._id,
        totalStudentsTaught: instructorAnalytics.totalStudentsEnrolled,
        totalCourses: createdCourses.filter(
          (course) =>
            course.courseInstructor.toString() === instructor._id.toString()
        ).length,
        averageRating: instructorAnalytics.averageRating,
        totalRatings: instructorAnalytics.totalRatings,

        reviews: [],
      });
    }

    console.log("All dummy data generated successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateDummyData();
