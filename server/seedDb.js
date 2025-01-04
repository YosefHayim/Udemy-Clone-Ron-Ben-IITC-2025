const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");
const connectDb = require("./config/connectDb");
const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const courseReviews = require("./models/reviews/courseReviewModel");
const courseCategories = require("./utils/courseCategories");
const ReportReview = require("./models/reviews/reportReviewModel");

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();

    // Clear collections
    await Promise.all([
      User.deleteMany(),
      Course.deleteMany(),
      Section.deleteMany(),
      Lesson.deleteMany(),
      courseReviews.deleteMany(),
      ReportReview.deleteMany(),
      InstructorComment.deleteMany(),
    ]);
    console.log("Cleared all collections");

    const users = [];
    const courses = [];
    const sections = [];
    const lessons = [];
    const reviews = [];

    // Create Users
    for (let i = 0; i < 50; i++) {
      const hashedPassword = await bcrypt.hash("password123", 10);
      users.push({
        fullName: faker.person.fullName(),
        headline: faker.person.jobTitle(),
        biography: faker.lorem.sentence(15),
        preferredLanguage: faker.helpers.arrayElement([
          "english",
          "deutsch",
          "espanol",
          "français",
          "italiano",
          "português",
          "nederlands",
          "polski",
          "日本語",
          "한국어",
          "中文",
          "русский",
          "العربية",
          "עברית",
          "tiếng Việt",
          "ไทย",
          "bahasa Indonesia",
        ]),
        email: faker.internet.email().toLowerCase(),
        emailVerified: faker.datatype.boolean(),
        profilePic: "default-user-profile.svg",
        password: hashedPassword,
        role: faker.helpers.arrayElement(["student", "instructor"]),
        udemyCredits: faker.number.int({ min: 0, max: 100 }),
        wishlistCourses: [],
        coursesBought: [],
        coursesCreated: [],
        orders: [],
        payments: [],
        subscriptionPlan: {
          type: faker.helpers.arrayElement(["monthly", "yearly"]),
          subscriptionPrice: 0,
          isSubscriptionActive: faker.datatype.boolean(),
        },
      });
    }

    const createdUsers = await User.insertMany(users);
    console.log("Users created successfully.");

    // Separate instructors and students
    const studentUsers = createdUsers.filter((user) => user.role === "student");
    const instructorUsers = createdUsers.filter(
      (user) => user.role === "instructor"
    );

    // Create Courses
    for (let i = 0; i < 50; i++) {
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
        category: parentCategory,
        subCategory: subCategory,
        courseTopic: topic,
        courseLevel: faker.helpers.arrayElement([
          "Beginner",
          "Intermediate",
          "Advanced",
        ]),
        courseLanguages: faker.helpers.arrayElement([
          "English",
          "Spanish",
          "French",
          "German",
          "Other",
        ]),
        courseInstructor: instructor._id,
        moneyBackGuarantee: faker.date.soon(30),
        averageRating: 0,
        totalRatings: 0,
        totalStudentsEnrolled: { students: [], count: 0 },
        isActive: faker.datatype.boolean(),
        sections: [],
        lessons: [],
        reviews: [],
      });

      // Add unique Sections and Lessons for this course
      const sectionCount = faker.number.int({ min: 1, max: 5 });
      for (let j = 0; j < sectionCount; j++) {
        const section = await Section.create({
          course: course._id,
          title: faker.lorem.words(4),
          totalSectionDuration: 0,
          totalSectionLessons: 0,
          lessons: [],
        });
        course.sections.push(section._id);

        const lessonCount = faker.datatype.number({ min: 1, max: 10 });
        for (let k = 0; k < lessonCount; k++) {
          const lesson = await Lesson.create({
            section: section._id,
            title: faker.lorem.words(3),
            videoUrl: faker.internet.url(),
            duration: faker.datatype.number({ min: 1, max: 30 }),
            order: k + 1,
            resources: [
              {
                title: faker.lorem.words(2),
                url: faker.internet.url(),
                type: faker.helpers.arrayElement([
                  "PDF",
                  "Video",
                  "Image",
                  "Link",
                ]),
              },
            ],
          });
          section.lessons.push(lesson._id);
          section.totalSectionDuration += lesson.duration;
          section.totalSectionLessons += 1;
          course.lessons.push(lesson._id);
        }
        await section.save();
      }
      await course.save();
      courses.push(course);
    }

    console.log("Courses created successfully.");

    // Assign courses to students
    for (const user of studentUsers) {
      const purchasedCourses = faker.helpers.arrayElements(
        courses,
        faker.number.int({ min: 1, max: 5 })
      );
      user.coursesBought = purchasedCourses.map((course) => course._id);
      for (const course of purchasedCourses) {
        course.totalStudentsEnrolled.count += 1;
        if (
          course.totalStudentsEnrolled &&
          Array.isArray(course.totalStudentsEnrolled.userIds)
        ) {
          course.totalStudentsEnrolled.userIds.push(user._id);
        } else {
          course.totalStudentsEnrolled = { count: 0, userIds: [user._id] };
        }
        await course.save();
      }
      await user.save();
    }
    console.log("Courses assigned to students.");

    // Create Sections and Lessons
    for (const course of courses) {
      const sectionCount = faker.number.int({ min: 1, max: 5 });
      for (let i = 0; i < sectionCount; i++) {
        const section = await Section.create({
          course: course._id,
          title: faker.lorem.words(4),
          totalSectionDuration: 0,
          totalSectionLessons: 0,
          lessons: [],
        });
        sections.push(section);
        course.sections.push(section._id);

        const lessonCount = faker.datatype.number({ min: 1, max: 10 });
        for (let j = 0; j < lessonCount; j++) {
          const lesson = await Lesson.create({
            section: section._id,
            title: faker.lorem.words(3),
            videoUrl: faker.internet.url(),
            duration: faker.datatype.number({ min: 1, max: 30 }),
            order: j + 1,
            resources: [
              {
                title: faker.lorem.words(2),
                url: faker.internet.url(),
                type: faker.helpers.arrayElement([
                  "PDF",
                  "Video",
                  "Image",
                  "Link",
                ]),
              },
            ],
          });
          lessons.push(lesson);
          section.lessons.push(lesson._id);
          section.totalSectionDuration += lesson.duration;
          section.totalSectionLessons += 1;
          course.lessons.push(lesson._id);
        }
        await section.save();
      }
      await course.save();
    }
    console.log("Sections and lessons created successfully.");

    // Create Reviews
    for (const course of courses) {
      const reviewCount = faker.datatype.number({ min: 5, max: 15 });
      for (let i = 0; i < reviewCount; i++) {
        const reviewer = faker.helpers.arrayElement(studentUsers);
        const rating = faker.datatype.float({ min: 1, max: 5, precision: 0.1 });
        const review = await courseReviews.create({
          user: reviewer._id,
          courseReview: course._id,
          rating,
          comment: faker.lorem.sentence(),
          likes: {
            count: faker.datatype.number({ min: 0, max: 50 }),
            users: [],
          },
          dislikes: {
            count: faker.datatype.number({ min: 0, max: 10 }),
            users: [],
          },
          reports: { count: 0, entries: [] },
        });

        course.reviews.push(review._id);

        // Update average rating and total ratings
        course.totalRatings += 1;
        course.averageRating =
          (course.averageRating * (course.totalRatings - 1) + rating) /
          course.totalRatings;

        await course.save();
      }
    }

    console.log("reviews created successfully.");

    // Create Reported Reviews
    const reportedReviews = [];
    for (const review of reviews) {
      const reportCount = faker.number.int({ min: 0, max: 3 }); // Randomly decide how many reports a review gets
      for (let i = 0; i < reportCount; i++) {
        const reporter = faker.helpers.arrayElement(studentUsers); // Random student user as reporter
        const issueType = faker.helpers.arrayElement(allowedIssueTypes);

        const report = await ReportReview.create({
          user: reporter._id,
          review: review._id,
          issueType,
          issueDetails: faker.lorem.sentence(10),
        });

        // Add report to the review's reports field
        review.reports.entries.push(report._id);
        review.reports.count += 1;

        reportedReviews.push(report);
        await review.save();
      }
    }
    console.log("Reported reviews created successfully.");

    console.log("All dummy data seeded successfully!");

    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateUpdatedDummyData();
