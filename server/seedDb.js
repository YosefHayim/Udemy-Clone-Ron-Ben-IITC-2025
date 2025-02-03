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
const videosToDisplay = require("./utils/videosToDisplay");
const supportedCountries = require("./utils/supportedCountries");
const algoSearch = require("./utils/algoSearch");
const Instructor = require("./models/users/instructorModel");

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
  const generatedEmails = new Set();

  // Fetch all existing emails from the database
  const existingUsers = await User.find({}, { email: 1, _id: 0 });
  existingUsers.forEach((user) => generatedEmails.add(user.email));

  // Generate new users
  for (let i = 0; i < 5; i++) {
    let email;

    // Ensure the email is unique (not in existing or newly generated emails)
    do {
      email = faker.internet.email().toLowerCase();
    } while (generatedEmails.has(email));

    generatedEmails.add(email);

    users.push({
      fullName: faker.person.fullName(),
      profilePic: faker.image.avatar(),
      email, // Use the unique email
      fieldLearning: faker.helpers.arrayElements(Object.keys(courseCategories)),
      role: faker.helpers.arrayElement(["student", "instructor", "student"]),
      bio: faker.lorem.sentence(1),
      links: {
        website: `https://wwww.${faker.person.fullName()}.com`,
        xPlatform: "https://twitter.com/?mx=1",
        facebook: "https://www.facebook.com/",
        linkedin: "https://www.linkedin.com/",
        youtube: "https://www.youtube.com/",
      },
      headline: faker.person.jobTitle(),
      udemyCredits: faker.number.int({ min: 5000, max: 10000 }),
      country: faker.helpers.arrayElement(supportedCountries),
      recentSearches: faker.helpers.arrayElements(algoSearch, {
        min: 3,
        max: 6,
      }),
    });
  }

  // Insert the new users into the database
  try {
    const createdUsers = await User.insertMany(users);
    console.log("Users created successfully:", createdUsers.length);
    return createdUsers;
  } catch (error) {
    console.error("Error inserting users:", error);
    throw error;
  }
};

const createCourses = async () => {
  console.log("Fetching instructors and students for course creation...");

  const instructors = await User.find({ role: "instructor" });
  if (!instructors.length) {
    throw new Error("No instructors found for course creation.");
  }

  const users = await User.find({ role: "student" });
  if (!users.length) {
    throw new Error("No students found for enrollment.");
  }

  const courses = [];

  for (const instructor of instructors) {
    const numCourses = faker.number.int({ min: 6, max: 10 });
    console.log(
      `Assigning ${numCourses} courses to instructor: ${instructor.fullName}`
    );

    for (let i = 0; i < numCourses; i++) {
      console.log(
        `Creating course ${i + 1}/${numCourses} for instructor ${
          instructor.fullName
        }...`
      );

      const parentCategory = faker.helpers.arrayElement(
        Object.keys(courseCategories)
      );
      const subCategories = courseCategories[parentCategory].subCategories;
      const subCategory = faker.helpers.arrayElement(
        Object.keys(subCategories)
      );
      const topic = faker.helpers.arrayElement(subCategories[subCategory]);

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
        courseFullPrice: 0,
        courseDiscountPrice: 0,
        whoThisCourseIsFor: faker.lorem.sentence(),
        courseInstructorDescription: faker.lorem.paragraphs(10),
        whatYouWillLearn: Array.from({ length: 8 }, () =>
          faker.lorem.sentence()
        ),
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
          "",
        ]),
        courseInstructor: instructor._id,
        courseTrailer: faker.helpers.arrayElement(videosToDisplay),
        moneyBackGuarantee: faker.date.soon(30),
        averageRating: 0,
        totalRatings: 0,
        totalStudentsEnrolled: {
          students: enrolledStudents.map((student) => student._id),
          count: enrolledStudents.length,
        },
        certificateOnly: faker.datatype.boolean(),
        isActive: true,
        totalCourseDuration: 0,
        totalCourseLessons: 0,
        sections: [],
        lessons: [],
        reviews: [],
      });

      if (!Array.isArray(instructor.coursesCreated)) {
        instructor.coursesCreated = [];
      }
      instructor.coursesCreated.push(course._id);
      await instructor.save();

      if (!course || !course._id || !course.courseName) {
        console.error(
          "Course creation failed or returned incomplete data:",
          course
        );
        return;
      }

      for (const student of enrolledStudents) {
        if (!Array.isArray(student.coursesBought)) {
          student.coursesBought = [];
        }

        student.coursesBought.push({
          courseName: course.courseName,
          courseId: course._id,
          boughtAt: Date.now(),
          coursePrice: course.courseDiscountPrice,
        });

        try {
          await student.save();
        } catch (error) {
          console.error(
            `Failed to update student ${student._id}:`,
            error.message
          );
        }
      }

      courses.push(course);
      console.log(`Course created: ${course.courseName}`);
    }
  }

  console.log(
    `Courses created successfully. Total courses assigned: ${courses.length}`
  );
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
    if (!section.course || !section.course._id) {
      console.warn(
        `Skipping section "${section.title}" due to missing course reference.`
      );
      continue; // Skip this section
    }

    console.log(`Creating lessons for section: ${section.title}...`);

    const totalLessonsPerSection = faker.number.int({ min: 1, max: 1 }); // Randomize number of lessons
    const createdLessons = [];
    let totalDurationForSection = 0;

    for (let i = 0; i < totalLessonsPerSection; i++) {
      const duration = faker.number.int({ min: 5, max: 10 });

      try {
        const lesson = await Lesson.create({
          section: section._id,
          title: faker.helpers.arrayElement(lessonsNames),
          videoUrl: faker.helpers.arrayElement(videosToDisplay),
          duration,
          order: section.lessons.length + createdLessons.length + 1, // Ensure unique order
        });

        createdLessons.push(lesson._id);
        lessons.push(lesson);
        totalDurationForSection += duration;

        console.log(
          `Lesson created: ${lesson.title}, Order: ${
            section.lessons.length + createdLessons.length
          }, Duration: ${duration} mins`
        );
      } catch (err) {
        console.error(`Error creating lesson: ${err.message}`);
      }
    }

    // Update the section with created lessons
    section.lessons.push(...createdLessons);
    section.totalSectionDuration += totalDurationForSection;
    section.totalSectionLessons += createdLessons.length;
    await section.save();

    // Update the course linked to the section
    try {
      const course = await Course.findById(section.course._id);
      if (course) {
        course.totalCourseDuration += totalDurationForSection;
        course.totalCourseLessons += createdLessons.length;
        await course.save();
      } else {
        console.warn(
          `No course found for section "${section.title}". Skipping course update.`
        );
      }
    } catch (err) {
      console.error(
        `Error updating course for section "${section.title}": ${err.message}`
      );
    }

    console.log(
      `Updated section "${section.title}" with ${createdLessons.length} lessons.`
    );
  }

  console.log(`Successfully created and linked ${lessons.length} lessons.`);
  return lessons;
};

const createReviews = async () => {
  try {
    console.log("Fetching students with enrolled courses...");

    const students = await User.find({
      role: "student",
      "coursesBought.courseId": { $exists: true, $type: "objectId" }, // Ensure valid ObjectId
    }).populate({
      path: "coursesBought.courseId", // Ensure proper population
      model: "Course",
      select: "_id courseName",
    });

    console.log(`Total students found: ${students.length}`);

    if (!students.length) {
      console.error("No students with enrolled courses found.");
      return;
    }

    for (const student of students) {
      if (!student.coursesBought || student.coursesBought.length === 0) {
        console.log(
          `No valid courses found for student ${student.email}. Skipping...`
        );
        continue;
      }

      for (const courseEntry of student.coursesBought) {
        const course = courseEntry.courseId; // Fix: Access the populated course object

        if (!course || !course._id) {
          console.error(
            `Invalid course reference for student "${student.email}". Skipping...`
          );
          continue;
        }

        const reviewPayload = {
          user: student._id,
          courseReview: course._id,
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentence(),
        };

        try {
          const review = await courseReviews.create(reviewPayload);
          if (!review) {
            console.error(
              `Review creation failed for course ID: ${course._id}`
            );
            continue;
          }

          const updatedCourse = await Course.findByIdAndUpdate(
            course._id,
            {
              $push: { reviews: review._id },
              $inc: { totalRatings: 1 },
              $set: {
                averageRating: await calculateAverageRating(course._id),
              },
            },
            { new: true }
          );

          if (!updatedCourse) {
            console.error(
              `Course with ID ${course._id} not found while updating.`
            );
          } else {
            console.log(
              `Review added to course "${updatedCourse.courseName}" successfully.`
            );
          }
        } catch (err) {
          console.error(
            `Error creating or updating review for course "${course.courseName}": ${err.message}`
          );
        }
      }
    }

    console.log("All reviews processed successfully.");
    console.log(`total reviews created: ${students.length}.`);
  } catch (err) {
    console.error("Error during review creation:", err.message);
    throw err;
  }
};

// Helper function to calculate average rating
const calculateAverageRating = async (courseId) => {
  try {
    const allRatings = await courseReviews.find({ courseReview: courseId });
    if (!allRatings.length) return 0;
    return allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length;
  } catch (err) {
    console.error(
      `Error calculating average rating for course ${courseId}: ${err.message}`
    );
    return 0;
  }
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

  const totalReports = 1;

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
  const courses = await Course.find({ isActive: true }).populate({
    path: "sections",
    populate: { path: "lessons", select: "_id duration" },
  });

  if (!users.length || !courses.length) {
    throw new Error("No users or courses available for simulation.");
  }

  console.log("Simulating course purchases...");
  for (const user of users) {
    try {
      const coursesToPurchase = faker.helpers.arrayElements(
        courses,
        faker.number.int({ min: 3, max: 5 })
      );

      for (const course of coursesToPurchase) {
        if (
          !user.coursesBought.some(
            (bought) => bought.course && bought.course.equals(course._id)
          )
        ) {
          const discountPrice = parseFloat(course.courseDiscountPrice);
          if (user.udemyCredits >= discountPrice) {
            user.coursesBought.push({
              courseName: course.courseName,
              courseId: course._id,
              boughtAt: new Date(),
              coursePrice: course.courseDiscountPrice,
            });
            user.udemyCredits -= discountPrice;

            // Update course enrollment
            course.totalStudentsEnrolled.count += 1;
            course.totalStudentsEnrolled.students.push(user._id);

            await course.save();
            console.log(`${user.fullName} purchased "${course.courseName}".`);
          } else {
            console.log(
              `${user.fullName} does not have enough credits for "${course.courseName}".`
            );
          }
        }
      }

      await user.save();
    } catch (err) {
      console.error(
        `Error processing purchases for user ${user.email}: ${err.message}`
      );
    }
  }

  console.log("Course purchases simulated successfully.");
};

const addCoursesToWishlistOfUsers = async () => {
  const users = await User.find({ role: "student" });
  const courses = await Course.find();

  if (!users.length) {
    console.warn("No users found to update with wishlist.");
    return;
  }
  if (!courses.length) {
    console.warn("No courses available to add to wishlist.");
    return;
  }

  console.log("Adding wishlist courses to users...");
  for (const user of users) {
    // Randomly select 1 to 5 courses for the wishlist
    const wishlistCourses = faker.helpers.arrayElements(
      courses.map((course) => course._id),
      faker.number.int({ min: 1, max: 5 })
    );

    // Update the user's wishlist
    user.wishlistCourses = wishlistCourses;
    await user.save();
    console.log(`Wishlist updated for user: ${user.fullName}`);
  }

  console.log("Wishlist courses added successfully.");
};

const createInstructorProfiles = async () => {
  console.log("Fetching instructors for instructor profile creation...");

  // Find all users with role: instructor
  const instructors = await User.find({ role: "instructor" });

  if (!instructors.length) {
    console.error("No instructors found.");
    return;
  }

  for (const instructor of instructors) {
    // Find courses created by this instructor
    const courses = await Course.find({ courseInstructor: instructor._id });

    if (!courses.length) {
      console.warn(`No courses found for instructor: ${instructor.fullName}`);
      continue; // Skip if no courses are assigned to this instructor
    }

    // Calculate total students from all courses
    const totalStudents = courses.reduce(
      (acc, course) => acc + (course.totalStudentsEnrolled.count || 0),
      0
    );

    // Calculate total reviews from all courses
    const totalReviews = courses.reduce(
      (acc, course) => acc + (course.totalRatings || 0),
      0
    );

    // Create Instructor document
    const instructorProfile = await Instructor.create({
      userId: instructor._id,
      coursesRelatedIds: courses.map((course) => course._id),
      backgroundOfInstructor: faker.lorem.paragraphs(10),
      avgRatingInstructor: faker.number.float({
        min: 3,
        max: 5,
        precision: 0.1,
      }),
      totalStudents: totalStudents,
      totalCourses: courses.length,
      totalReviews: totalReviews,
    });

    console.log(`Instructor profile created for: ${instructor.fullName}`);
  }

  console.log("All instructor profiles created successfully.");
};

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();
    console.log("Database connection established.");
    // await clearCollections();
    // console.log("Deleted all db.");

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

    // await simulateCoursePurchases();
    // console.log("Simulate courses purchases completed");

    console.log("Seeding reviews...");
    const reviews = await createReviews();
    console.log(`${reviews.length} reviews created.`);

    console.log("Seeding reported reviews...");
    await createReportedReviews();

    await addCoursesToWishlistOfUsers();
    console.log("Simulate courses wishlists completed");

    await createInstructorProfiles();
    console.log("create instructor profiles completed.");

    console.log("All dummy data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err.message);
    process.exit(1);
  }
};

generateUpdatedDummyData();
