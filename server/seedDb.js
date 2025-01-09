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
const videosToDisplay = require("./utils/videosToDsiplay");

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
  for (let i = 0; i < 10; i++) {
    console.log(`Creating user ${i + 1}...`);
    const hashedPassword = await bcrypt.hash("password123", 10);
    users.push({
      fullName: faker.person.fullName(),
      profilePic: faker.image.avatar(),
      email: faker.internet.email().toLowerCase(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["student", "instructor", "student"]),
      biography: faker.lorem.sentence(15),
      udemyCredits: faker.number.int({ min: 5000, max: 10000 }),
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

  const users = await User.find({ role: "student" });
  if (users.length === 0) {
    throw new Error("No students found for enrollment.");
  }

  const amountOfCourses = 10;
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

    // Randomly select students to enroll in this course
    const enrolledStudents = faker.helpers.arrayElements(
      users,
      faker.number.int({ min: 7, max: 15 })
    );

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
      courseInstructorDescription: faker.lorem.paragraphs(10),
      WhatYouWillLearn: Array.from({ length: 8 }, () => faker.lorem.sentence()),
      courseRequirements: Array.from({ length: 5 }, () =>
        faker.lorem.sentence()
      ),
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
      totalStudentsEnrolled: {
        students: enrolledStudents.map((student) => student._id),
        count: enrolledStudents.length,
      },
      isActive: true,
      totalCourseDuration: 0,
      totalCourseLessons: 0,
      sections: [],
      lessons: [],
      reviews: [],
    });

    // Update each user's `coursesBought` field with the created course
    for (const student of enrolledStudents) {
      student.coursesBought.push(course._id);
      await student.save();
    }

    courses.push(course);
    console.log(`Course ${i + 1} created: ${course.courseName}`);
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

  for (const course of courses) {
    const numSections = faker.number.int({ min: 1, max: 3 }); // Random number of sections per course
    const createdSections = [];

    for (let i = 0; i < numSections; i++) {
      console.log(
        `Creating section ${i + 1}/${numSections} for course "${
          course.courseName
        }"...`
      );

      try {
        const section = await Section.create({
          course: course._id,
          title: faker.helpers.arrayElement(sectionNames),
          totalSectionDuration: 0,
          totalSectionLessons: 0,
          lessons: [],
        });

        // Keep track of created sections for this course
        createdSections.push(section._id);
        sections.push(section);
      } catch (err) {
        console.error(
          `Error creating section ${i + 1} for ${course.courseName}:`,
          err.message
        );
      }
    }

    // Update the course with created sections
    if (createdSections.length > 0) {
      course.sections.push(...createdSections);
      await course.save();
      console.log(
        `Updated course "${course.courseName}" with ${createdSections.length} sections.`
      );
    }
  }

  console.log(`Successfully created and linked ${sections.length} sections.`);
  return sections;
};

const createLessons = async () => {
  console.log("Fetching sections for lesson creation...");
  const sections = await Section.find().populate("course");

  if (sections.length === 0) {
    throw new Error("No sections found for lesson creation.");
  }

  console.log(`${sections.length} sections found.`);
  const lessons = [];

  for (const section of sections) {
    console.log(`Creating lessons for section: ${section.title}...`);

    const totalLessonsPerSection = faker.number.int({ min: 1, max: 2 }); // Randomize number of lessons
    const createdLessons = [];
    let totalDurationForSection = 0;

    for (let i = 0; i < totalLessonsPerSection; i++) {
      const duration = faker.number.int({ min: 10, max: 20 });

      const lesson = await Lesson.create({
        section: section._id,
        title: faker.helpers.arrayElement(lessonsNames),
        videoUrl: faker.helpers.arrayElement(videosToDisplay),
        duration,
        order: i + 1, // Sequential order within the section
      });

      createdLessons.push(lesson._id);
      lessons.push(lesson);
      totalDurationForSection += duration;

      console.log(
        `Lesson created: ${lesson.title}, Order: ${
          i + 1
        }, Duration: ${duration} mins`
      );
    }

    // Update the section with created lessons
    section.lessons.push(...createdLessons);
    section.totalSectionDuration += totalDurationForSection;
    section.totalSectionLessons += createdLessons.length;
    await section.save();

    // Update the course linked to the section
    const course = await Course.findById(section.course._id);
    course.totalCourseDuration += totalDurationForSection;
    course.totalCourseLessons += createdLessons.length;
    await course.save();

    console.log(
      `Updated section "${section.title}" with ${createdLessons.length} lessons.`
    );
  }

  console.log(`Successfully created and linked ${lessons.length} lessons.`);
  return lessons;
};

const createReviews = async () => {
  console.log("Fetching students with enrolled courses for review creation...");

  try {
    // Step 1: Fetch all students with enrolled courses
    const students = await User.find({
      role: "student",
      coursesBought: { $exists: true, $ne: [] },
    })
      .populate("coursesBought")
      .exec();

    if (!students.length) {
      throw new Error("No students with enrolled courses found.");
    }

    const totalReviews = 30; // Number of reviews to create
    const reviews = [];

    for (let i = 0; i < totalReviews; i++) {
      console.log(`Creating review ${i + 1}/${totalReviews}...`);

      // Step 2: Randomly select a student
      const randomStudent = faker.helpers.arrayElement(students);

      if (!randomStudent.coursesBought?.length) {
        console.error(
          `Student "${randomStudent.email}" has no enrolled courses. Skipping...`
        );
        continue;
      }

      // Step 3: Randomly select a course from the student's enrolled courses
      const randomCourse = faker.helpers.arrayElement(
        randomStudent.coursesBought
      );

      if (!randomCourse || !randomCourse._id) {
        console.error(
          `Invalid course for student "${randomStudent.email}". Skipping...`
        );
        continue;
      }

      try {
        // Step 4: Create the review
        const reviewPayload = {
          user: randomStudent._id,
          courseReview: randomCourse._id,
          rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          comment: faker.lorem.sentence(),
        };

        console.log("Review payload:", reviewPayload);
        const review = await courseReviews.create(reviewPayload);

        // Step 5: Update the course with the review
        console.log(
          `Updating course "${randomCourse.courseName}" with review.`
        );
        await Course.findByIdAndUpdate(
          randomCourse._id,
          {
            $push: { reviews: review._id },
            $inc: { totalRatings: 1 },
            $set: {
              averageRating: await calculateAverageRating(randomCourse._id),
            },
          },
          { new: true }
        );

        reviews.push(review);
        console.log(
          `Review ${i + 1} created for course "${
            randomCourse.courseName
          }" by student "${randomStudent.email}".`
        );
      } catch (err) {
        console.error(`Error creating review ${i + 1}:`, err.message);
      }
    }

    console.log("Reviews created successfully:", reviews.length);
    return reviews;
  } catch (err) {
    console.error("Error during review creation:", err.message);
    throw err;
  }
};

// Helper function to calculate average rating
const calculateAverageRating = async (courseId) => {
  const allRatings = await courseReviews.find({ courseReview: courseId });
  if (!allRatings.length) return 0;
  return allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length;
};

const createReportedReviews = async () => {
  console.log("Fetching reviews and students for reporting...");

  const reviews = await courseReviews.find().populate({
    path: "courseReview",
    select: "_id courseName",
  });

  const students = await User.find({ role: "student" });

  if (!reviews || reviews.length === 0) {
    throw new Error("No reviews found for reporting.");
  }

  if (!students || students.length === 0) {
    throw new Error("No students found for reporting.");
  }

  const totalReports = 10;

  for (let i = 0; i < totalReports; i++) {
    console.log(`Creating report ${i + 1}/${totalReports}...`);

    // Filter reviews where the student has purchased the course
    const eligibleReviews = reviews.filter((review) =>
      students.some((student) =>
        student.coursesBought.some((courseId) =>
          courseId.equals(review.courseReview._id)
        )
      )
    );

    if (eligibleReviews.length === 0) {
      console.error("No eligible reviews found for reporting.");
      continue;
    }

    const randomReview = faker.helpers.arrayElement(eligibleReviews);
    if (!randomReview || !randomReview.courseReview) {
      console.error("Invalid review or course reference in review.");
      continue;
    }

    const randomStudent = students.find((student) =>
      student.coursesBought.some((courseId) =>
        courseId.equals(randomReview.courseReview._id)
      )
    );

    if (!randomStudent) {
      console.error(
        `No student found who bought the course "${randomReview.courseReview.courseName}".`
      );
      continue;
    }

    const randomIssueType = faker.helpers.arrayElement(allowedIssueTypes);

    try {
      const report = await ReportReview.create({
        user: randomStudent._id,
        review: randomReview._id,
        issueType: randomIssueType,
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
  console.log("Fetching students and active courses...");
  const users = await User.find({
    role: "student",
    udemyCredits: { $gte: 10 },
  });
  const courses = await Course.find({ isActive: true });

  if (!users.length || !courses.length) {
    throw new Error("No users or courses available for simulation.");
  }

  console.log("Simulating course purchases...");
  for (const user of users) {
    try {
      // Randomly select courses for the user to purchase
      const coursesToPurchase = faker.helpers.arrayElements(
        courses,
        faker.number.int({ min: 3, max: 5 })
      );

      for (const course of coursesToPurchase) {
        if (!user.coursesBought.includes(course._id)) {
          // Deduct credits and update user
          const discountPrice = parseFloat(course.courseDiscountPrice);
          if (user.udemyCredits >= discountPrice) {
            user.coursesBought.push(course._id);
            user.udemyCredits -= discountPrice;

            // Update course with the student's enrollment
            course.totalStudentsEnrolled.count += 1;
            course.totalStudentsEnrolled.students.push(user._id);

            // Save both user and course
            await user.save();
            await course.save();

            console.log(`${user.fullName} purchased "${course.courseName}".`);
          } else {
            console.log(
              `${user.fullName} does not have enough credits for "${course.courseName}".`
            );
          }
        }
      }
    } catch (err) {
      console.error(
        `Error processing purchases for user ${user.email}:`,
        err.message
      );
    }
  }

  console.log("Ensuring lesson accessibility for enrolled users...");
  const lessons = await Lesson.find().populate("section");

  for (const user of users) {
    const purchasedCourses = user.coursesBought;

    for (const lesson of lessons) {
      const courseId = lesson.section.course;

      if (purchasedCourses.includes(courseId.toString())) {
        console.log(
          `User ${user.email} can access lesson "${lesson.title}" in course ID ${courseId}.`
        );
      } else {
        console.warn(
          `User ${user.email} cannot access lesson "${lesson.title}" as they are not enrolled in the course.`
        );
      }
    }
  }

  console.log("Course purchases simulated successfully.");
};

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();
    // console.log("Database connection established.");
    // await clearCollections();

    // console.log("Seeding users...");
    // const users = await createUsers();
    // console.log(`${users.length} users created.`);

    // console.log("Seeding courses...");
    // const courses = await createCourses();
    // console.log(`${courses.length} courses created.`);

    // console.log("Seeding sections...");
    // const sections = await createSections();
    // console.log(`${sections.length} sections created.`);

    // console.log("Seeding lessons...");
    // const lessons = await createLessons();
    // console.log(`${lessons.length} lessons created.`);

    console.log("Seeding reviews...");
    const reviews = await createReviews();
    console.log(`${reviews.length} reviews created.`);

    // console.log("Seeding reported reviews...");
    // await createReportedReviews();

    // await simulateCoursePurchases();
    // console.log("Simulate courses purchases completed");

    console.log("All dummy data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err.message);
    process.exit(1);
  }
};

generateUpdatedDummyData();
