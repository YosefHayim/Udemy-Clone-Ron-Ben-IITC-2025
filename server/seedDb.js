const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");
const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const courseReviews = require("./models/reviews/courseReviewModel");
const connectDb = require("./config/connectDb");
const courseCategories = require("./utils/courseCategories");

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();

    // Clear collections
    await Promise.all([
      User.deleteMany({}),
      Course.deleteMany({}),
      Section.deleteMany({}),
      Lesson.deleteMany({}),
      courseReviews.deleteMany({}),
      InstructorComment.deleteMany({}),
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
    console.log("Users created successfully.");

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
        courseInstructor: instructor._id,
        averageRating: 0,
        totalRatings: 0,
        totalStudentsEnrolled: { count: 0, userIds: [] },
        sections: [],
        lessons: [],
        reviews: [],
      });

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
          lessons: [],
        });
        sections.push(section);
        course.sections.push(section._id);

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
          course.lessons.push(lesson._id);
        }
        await section.save();
      }
      await course.save();
    }
    console.log("Sections and lessons created successfully.");

    // Create Reviews
    for (const course of courses) {
      const reviewCount = faker.number.int({ min: 5, max: 15 });
      for (let i = 0; i < reviewCount; i++) {
        const reviewer = faker.helpers.arrayElement(studentUsers);
        const rating = faker.number.float({ min: 1, max: 5, precision: 0.1 });
        const review = await courseReviews.create({
          user: reviewer._id,
          courseReview: course._id,
          rating,
          comment: faker.lorem.sentence(),
          likes: faker.number.int({ min: 0, max: 50 }),
          dislikes: faker.number.int({ min: 0, max: 10 }),
        });

        reviews.push(review);
        course.reviews.push(review._id);

        // Update average rating and total ratings
        course.totalRatings += 1;
        course.averageRating =
          (course.averageRating * (course.totalRatings - 1) + rating) /
          course.totalRatings;

        await course.save();
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
