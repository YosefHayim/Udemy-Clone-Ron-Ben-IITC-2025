const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");
const connectDb = require("./config/connectDb");
const User = require("./models/users/userModel");
const Course = require("./models/courses/courseModel");
const Lesson = require("./models/courses/lessonModel");
const Section = require("./models/courses/sectionModel");
const InstructorComment = require("./models/reviews/instructorCommentModel");
const courseReviews = require("./models/reviews/courseReviewModel");
const ReportReview = require("./models/reviews/reportReviewModel");
const courseCategories = require("./utils/courseCategories");
const allowedIssueTypes = require("./utils/reportSubjects");
const courseNames = require("./utils/courseNames");
const sectionNames = require("./utils/sectionNames");
const lessonsNames = require("./utils/lessonNames");

const clearCollections = async () => {
  await Promise.all([
    User.deleteMany(),
    Course.deleteMany(),
    Section.deleteMany(),
    Lesson.deleteMany(),
    courseReviews.deleteMany(),
    ReportReview.deleteMany(),
    InstructorComment.deleteMany(),
  ]);
  console.log("Cleared all collections.");
};

const createUsers = async () => {
  const users = [];
  for (let i = 0; i < 400; i++) {
    console.log(`Creating user ${i + 1}...`);
    const hashedPassword = await bcrypt.hash("password123", 10);
    users.push({
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["student", "instructor", "student"]),
      biography: faker.lorem.sentence(15),
      udemyCredits: faker.number.int({ min: 1000, max: 3000 }),
    });
  }
  const createdUsers = await User.insertMany(users);
  console.log("Users created successfully:");
  return createdUsers;
};

const createCourses = async () => {
  const instructors = await User.find({ role: "instructor" });
  if (instructors.length === 0) {
    throw new Error("No instructors found for course creation.");
  }

  const amountOfCourses = 2000;

  const courses = [];
  for (let i = 0; i < amountOfCourses; i++) {
    console.log(`Creating course ${i + 1}/${amountOfCourses}...`);

    const instructor = faker.helpers.arrayElement(instructors);
    const parentCategory = faker.helpers.arrayElement(
      Object.keys(courseCategories)
    );
    const subCategories = courseCategories[parentCategory].subCategories;
    const subCategory = faker.helpers.arrayElement(Object.keys(subCategories));
    const topic = faker.helpers.arrayElement(subCategories[subCategory]);

    const course = await Course.create({
      courseName: faker.helpers.arrayElement(courseNames),
      courseImg: faker.image.urlPicsumPhotos({
        width: 640,
        height: 480,
        category: "education",
      }),
      courseRecapInfo: faker.lorem.words(10),
      courseDescription: faker.lorem.paragraph(),
      courseFullPrice: faker.commerce.price(10, 500, 2),
      courseDiscountPrice: faker.commerce.price(10, 250, 2),
      whoThisCourseIsFor: faker.lorem.sentence(),
      WhatYouWillLearn: Array.from({ length: 8 }, () => faker.lorem.sentence()),
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
      ]),
      courseTag: faker.helpers.arrayElement([
        "Bestseller",
        "Highest Rated",
        "Hot and New",
        "New",
      ]),
      courseInstructor: instructor._id,
      moneyBackGuarantee: faker.date.soon(30),
      averageRating: 0,
      totalRatings: 0,
      totalStudentsEnrolled: { students: [], count: 0 },
      isActive: faker.datatype.boolean(),
      totalCourseDuration: 0,
      totalCourseLessons: 0,
      sections: [],
      lessons: [],
      reviews: [],
    });

    courses.push(course);
    console.log(`Course ${i + 1} created:`, course.courseName);
  }
  console.log("Courses created successfully.");
  return courses;
};

const createSections = async () => {
  console.log("Fetching courses for section creation...");
  const courses = await Course.find();
  if (courses.length === 0) {
    throw new Error("No courses found for section creation.");
  }

  console.log(`${courses.length} courses found.`);
  const sections = [];
  const courseIds = courses.map((course) => course._id);
  const sectionCount = 30; // Number of sections to create
  const courseSectionsMap = {}; // Map for batch updating courses with sections

  for (let i = 0; i < sectionCount; i++) {
    console.log(`Creating section ${i + 1}/${sectionCount}...`);

    try {
      const randomCourseId = faker.helpers.arrayElement(courseIds);

      const section = await Section.create({
        course: randomCourseId,
        title: faker.helpers.arrayElement(sectionNames),
        totalSectionDuration: 0,
        totalSectionLessons: 0,
        lessons: [],
      });

      // Track sections by course for batch update
      if (!courseSectionsMap[randomCourseId]) {
        courseSectionsMap[randomCourseId] = [];
      }
      courseSectionsMap[randomCourseId].push(section._id);

      sections.push(section);

      // Update course's total duration and lessons
      const course = await Course.findById(randomCourseId);
      course.totalCourseDuration += section.totalSectionDuration;
      course.totalCourseLessons += section.totalSectionLessons;
      await course.save();
    } catch (err) {
      console.error(`Error creating section ${i + 1}:`, err.message);
    }
  }

  console.log("Batch updating courses with section IDs...");
  try {
    await Promise.all(
      Object.keys(courseSectionsMap).map(async (courseId) => {
        const sectionIds = courseSectionsMap[courseId];
        await Course.findByIdAndUpdate(courseId, {
          $push: { sections: { $each: sectionIds } },
        });
        console.log(
          `Updated Course ID: ${courseId} with sections:`,
          sectionIds
        );
      })
    );
  } catch (err) {
    console.error("Error during batch update of courses:", err.message);
  }

  console.log("Sections created successfully.");
  return sections;
};

const createLessons = async () => {
  const sections = await Section.find().populate("course");
  if (sections.length === 0) {
    throw new Error("No sections found for lesson creation.");
  }

  const totalLessonsPerSection = 10; // Number of lessons per section
  const lessons = [];

  for (const section of sections) {
    console.log(`Creating lessons for section: ${section.title}...`);
    const uniqueOrders = Array.from(
      { length: totalLessonsPerSection },
      (_, i) => i + 1
    );

    const sectionLessons = [];
    let totalDurationForSection = 0;

    for (let i = 0; i < totalLessonsPerSection; i++) {
      const duration = faker.number.int({ min: 5, max: 20 });
      try {
        const lesson = new Lesson({
          section: section._id,
          title: faker.helpers.arrayElement(lessonsNames),
          videoUrl: faker.internet.url(),
          duration,
          order: uniqueOrders[i],
        });

        sectionLessons.push(lesson);
        totalDurationForSection += duration;
        lessons.push(lesson);
        console.log(
          `Lesson created: ${lesson.title}, Order: ${uniqueOrders[i]}, Duration: ${duration} mins`
        );
      } catch (err) {
        console.error(
          `Error creating lesson for section: ${section.title}, Section ID: ${section._id}`,
          err.message
        );
      }
    }

    // Bulk insert lessons
    await Lesson.insertMany(sectionLessons);

    // Update section details
    section.lessons.push(...sectionLessons.map((lesson) => lesson._id));
    section.totalSectionDuration += totalDurationForSection;
    section.totalSectionLessons += sectionLessons.length;
    await section.save();

    // Update course details
    const course = await Course.findById(section.course._id);
    course.totalCourseDuration += totalDurationForSection;
    course.totalCourseLessons += sectionLessons.length;
    await course.save();
  }

  console.log(
    "Lessons created successfully:",
    lessons.map((lesson) => lesson.title)
  );
  return lessons;
};

const createReviews = async () => {
  const courses = await Course.find();
  const students = await User.find({ role: "student" });

  if (courses.length === 0 || students.length === 0) {
    throw new Error("No courses or students found for review creation.");
  }

  const courseIds = courses.map((course) => course._id);
  const totalReviews = 30;
  const reviews = [];

  for (let i = 0; i < totalReviews; i++) {
    console.log(`Creating review ${i + 1}/${totalReviews}...`);
    const randomCourseId = faker.helpers.arrayElement(courseIds);
    const randomStudent = faker.helpers.arrayElement(students);

    const review = await courseReviews.create({
      user: randomStudent._id,
      courseReview: randomCourseId,
      rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
      comment: faker.lorem.sentence(),
    });

    const course = await Course.findById(randomCourseId);
    course.reviews.push(review._id);
    await course.save();

    reviews.push(review);
    console.log(
      `Review ${i + 1} created:`,
      review.comment,
      `For Course:`,
      course.courseName
    );
  }

  console.log(
    "Reviews created successfully:",
    reviews.map((review) => review.comment)
  );
  return reviews;
};

const createReportedReviews = async () => {
  const reviews = await courseReviews.find();
  const students = await User.find({ role: "student" });

  if (reviews.length === 0 || students.length === 0) {
    throw new Error("No reviews or students found for reporting.");
  }

  const totalReports = 5;

  for (let i = 0; i < totalReports; i++) {
    console.log(`Creating report ${i + 1}/${totalReports}...`);
    const randomReview = faker.helpers.arrayElement(reviews);
    const randomStudent = faker.helpers.arrayElement(students);
    const randomIssueType = faker.helpers.arrayElement(allowedIssueTypes); // Select a valid issueType

    try {
      const report = await ReportReview.create({
        user: randomStudent._id,
        review: randomReview._id,
        issueType: randomIssueType, // Include the issueType
        issueDetails: faker.lorem.sentence(),
      });

      randomReview.reports = randomReview.reports || { count: 0, entries: [] };
      randomReview.reports.entries.push(report._id);
      randomReview.reports.count += 1;
      await randomReview.save();

      console.log(
        `Report ${i + 1} created for Review:`,
        randomReview.comment,
        `Reported by:`,
        randomStudent.email,
        `Issue Type:`,
        randomIssueType
      );
    } catch (err) {
      console.error(`Error creating report ${i + 1}:`, err.message);
    }
  }

  console.log("Reported reviews created successfully.");
};

const simulateCoursePurchases = async () => {
  const users = await User.find({
    role: "student",
    udemyCredits: { $gte: 10 },
  });
  const courses = await Course.find({ isActive: true });

  if (!users.length || !courses.length) {
    throw new Error("No users or courses available for simulation.");
  }

  for (const user of users) {
    const course = faker.helpers.arrayElement(courses);

    if (!user.coursesBought.includes(course._id)) {
      user.coursesBought.push(course._id);
      user.udemyCredits -= course.courseDiscountPrice;

      course.totalStudentsEnrolled.count += 1;
      course.totalStudentsEnrolled.students.push(user._id);

      await user.save();
      await course.save();
      console.log(`${user.fullName} bought ${course.courseName}`);
    }
  }
  console.log("Course purchases simulated successfully.");
};

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();
    console.log("Database connection established.");
    await clearCollections();

    console.log("Seeding users...");
    const users = await createUsers();
    console.log(`${users.length} users created.`);

    console.log("Seeding courses...");
    const courses = await createCourses();
    console.log(`${courses.length} courses created.`);

    console.log("Seeding sections...");
    const sections = await createSections();
    console.log(`${sections.length} sections created.`);

    console.log("Seeding lessons...");
    const lessons = await createLessons();
    console.log(`${lessons.length} lessons created.`);

    console.log("Seeding reviews...");
    const reviews = await createReviews();
    console.log(`${reviews.length} reviews created.`);

    console.log("Seeding reported reviews...");
    await createReportedReviews();

    await simulateCoursePurchases();
    console.log("Simulate courses purchases completed");

    console.log("All dummy data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err.message);
    process.exit(1);
  }
};

generateUpdatedDummyData();
