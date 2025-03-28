import { faker } from "@faker-js/faker";
import connectDb from "./config/connectDb.ts";
import User from "./models/users/userModel.ts";
import Course from "./models/courses/courseModel.ts";
import Lesson from "./models/courses/lessonModel.ts";
import Section from "./models/courses/sectionModel.ts";
import InstructorComment from "./models/reviews/instructorCommentModel.ts";
import courseReviews from "./models/reviews/courseReviewModel.ts";
import ReportReview from "./models/reviews/reportReviewModel.ts";
import courseCategories from "./utils/courseCategories.ts";
import allowedIssueTypes from "./utils/reportSubjects.ts";
import courseNames from "./utils/courseNames.ts";
import sectionNames from "./utils/sectionNames.ts";
import lessonsNames from "./utils/lessonNames.ts";
import videosToDisplay from "./utils/videosToDisplay.ts";
import supportedCountries from "./utils/supportedCountries.ts";
import algoSearch from "./utils/algoSearch.ts";
import Instructor from "./models/users/instructorModel.ts";
import CourseProgress from "./models/courses/courseProgressModel.ts";
import { InstructorDocument, LessonDocument } from "./types/types.ts";
import Coupon from "./models/courses/couponModel.ts";
import { getRandomImageFromDir } from "./utils/getRandomImageFromDir.ts";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clearCollections = async () => {
  await Promise.all([
    User.deleteMany(),
    CourseProgress.deleteMany(),
    Course.deleteMany(),
    Section.deleteMany(),
    Lesson.deleteMany(),
    courseReviews.deleteMany(),
    ReportReview.deleteMany(),
    Instructor.deleteMany(),
    InstructorComment.deleteMany(),
    Coupon.deleteMany(),
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
  for (let i = 0; i < 5000; i++) {
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
      role: faker.helpers.arrayElement(["student", "instructor"]),
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
    console.log("Error inserting users:", error);
    throw error;
  }
};

const createCourses = async ({ totalCourses = 100 } = {}) => {
  console.log("Fetching instructors and students for course creation...");

  const instructors = await User.find({ role: "instructor" });
  if (!instructors.length) throw new Error("No instructors found.");

  const users = await User.find({ role: "student" });
  if (!users.length) throw new Error("No students found.");

  // Flatten: [{ parentCategory, subCategory, topics: [...] }]
  const subcategoryList = [];
  for (const parentCategory of Object.keys(courseCategories)) {
    const subCategories = courseCategories[parentCategory].subCategories;
    for (const subCategory of Object.keys(subCategories)) {
      subcategoryList.push({
        parentCategory,
        subCategory,
        topics: subCategories[subCategory],
      });
    }
  }

  const courses = [];
  let instructorIndex = 0;
  let subcategoryIndex = 0;

  while (courses.length < totalCourses) {
    const { parentCategory, subCategory, topics } =
      subcategoryList[subcategoryIndex];
    subcategoryIndex = (subcategoryIndex + 1) % subcategoryList.length;

    const topic = faker.helpers.arrayElement(topics);
    const instructor = instructors[instructorIndex];
    instructorIndex = (instructorIndex + 1) % instructors.length;

    const enrolledStudents = faker.helpers.arrayElements(
      users,
      faker.number.int({ min: 7, max: 15 })
    );

    const course = await Course.create({
      courseName: faker.helpers.arrayElement(courseNames),
      courseImg: getRandomImageFromDir(
        path.join(__dirname, "public/imgs/courses")
      ),
      courseRecapInfo: faker.lorem.words(10),
      courseDescription: faker.lorem.paragraph(),
      courseFullPrice: faker.number.int({ min: 500, max: 800 }),
      courseDiscountPrice: faker.number.int({ min: 100, max: 300 }),
      whoThisCourseIsFor: faker.lorem.sentence(),
      courseInstructorDescription: faker.lorem.paragraphs(3),
      whatYouWillLearn: Array.from({ length: 8 }, () => faker.lorem.sentence()),
      courseRequirements: Array.from({ length: 5 }, () =>
        faker.lorem.sentence()
      ),
      category: parentCategory,
      subCategory,
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
        students: enrolledStudents.map((s) => s._id),
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

    instructor.coursesCreated ||= [];
    instructor.coursesCreated.push(course._id);
    await instructor.save();

    for (const student of enrolledStudents) {
      student.coursesBought ||= [];
      student.coursesBought.push({
        courseName: course.courseName,
        courseId: course._id,
        boughtAt: new Date(),
        coursePrice: course.courseDiscountPrice,
      });
      try {
        await student.save();
      } catch (error) {
        console.log(
          `❌ Failed to update student ${student._id}:`,
          error.message
        );
      }
    }

    courses.push(course);
    console.log(`✅ Created course: ${course.courseName}`);
  }

  console.log(`🎉 Finished creating ${courses.length} courses.`);
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
        console.log(
          `Error creating section ${i + 1} for ${course.courseName}:`,
          err
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

    const totalLessonsPerSection = faker.number.int({ min: 1, max: 3 }); // Randomize number of lessons
    const createdLessons = [];
    let totalDurationForSection = 0;

    for (let i = 0; i < totalLessonsPerSection; i++) {
      const duration = faker.number.int({ min: 5, max: 10 });

      try {
        const lesson: LessonDocument = await Lesson.create({
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
        console.log(`Error creating lesson: ${err}`);
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
      console.log(
        `Error updating course for section "${section.title}": ${err}`
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
      console.log("No students with enrolled courses found.");
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
          console.log(
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
            console.log(`Review creation failed for course ID: ${course._id}`);
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
            console.log(
              `Course with ID ${course._id} not found while updating.`
            );
          } else {
            console.log(
              `Review added to course "${updatedCourse.courseName}" successfully.`
            );
          }
        } catch (err) {
          console.log(
            `Error creating or updating review for course "${course.courseName}": ${err.message}`
          );
        }
      }
    }

    console.log("All reviews processed successfully.");
  } catch (err: unknown) {
    console.log("Error during review creation:", (err as Error).message);
    throw err;
  }
};

// Helper function to calculate average rating
const calculateAverageRating = async (courseId: string) => {
  try {
    const allRatings = await courseReviews.find({ courseReview: courseId });
    if (!allRatings.length) return 0;
    return allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length;
  } catch (err) {
    console.log(
      `Error calculating average rating for course ${courseId}: ${err}`
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

  const totalReports = 100;

  for (let i = 0; i < totalReports; i++) {
    console.log(`Creating report ${i + 1}/${totalReports}...`);

    // Filter reviews where the student has purchased the course
    const eligibleReviews = reviews.filter((review) =>
      students.some((student) =>
        student.coursesBought.some(
          (course) => course.courseId === review.courseReview._id.toString()
        )
      )
    );

    if (eligibleReviews.length === 0) {
      console.log("No eligible reviews found for reporting.");
      continue;
    }

    const randomReview = faker.helpers.arrayElement(eligibleReviews);
    if (!randomReview || !randomReview.courseReview) {
      console.log("Invalid review or course reference in review.");
      continue;
    }

    const randomStudent = students.find((student) =>
      student.coursesBought.some(
        (course) => course.courseId === randomReview.courseReview._id.toString()
      )
    );

    if (!randomStudent) {
      console.log(
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
      console.log(`Error creating report ${i + 1}:`, err);
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
      console.log(`Error processing purchases for user ${user.email}: ${err}`);
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
    console.log("No instructors found.");
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
    const instructorProfile: InstructorDocument = await Instructor.create({
      userId: instructor._id,
      coursesRelatedIds: courses.map((course) => course._id),
      backgroundOfInstructor: faker.lorem.paragraphs(10),
      avgRatingInstructor: faker.number.float({
        min: 3,
        max: 5,
      }),
      totalStudents: totalStudents,
      totalCourses: courses.length,
      totalReviews: totalReviews,
    });

    console.log(`Instructor profile created for: ${instructor.fullName}`);
  }

  console.log("All instructor profiles created successfully.");
};

const generateCouponsForCourses = async () => {
  console.log("Generating coupons for existing courses...");

  try {
    // Get all active courses with their instructors
    const courses = await Course.find({ isActive: true }).populate({
      path: "courseInstructor",
      select: "_id fullName", // Select specific fields
    });

    console.log("First course:", courses[0]); // See if courseInstructor is populated

    if (!courses.length) {
      console.log("No active courses found for coupon generation.");
      return;
    }

    const coupons = [];

    for (const course of courses) {
      if (!course.courseInstructor || !course.courseInstructor._id) {
        console.warn(
          `Skipping course ${course.courseName} because it has no instructor.`
        );
        continue;
      }

      const numCoupons = faker.number.int({ min: 2, max: 4 });

      for (let i = 0; i < numCoupons; i++) {
        console.log(course.courseInstructor._id);

        const isPercentage = faker.datatype.boolean();
        const discountPercentage = isPercentage
          ? faker.number.int({ min: 10, max: 75 })
          : 0;
        const discountPrice = !isPercentage
          ? faker.number.int({ min: 50, max: 200 })
          : 0;

        const coupon = {
          courseId: course._id,
          couponCode: `${course.courseName
            .substring(0, 3)
            .toUpperCase()}${faker.string.alphanumeric(5).toUpperCase()}`,
          discountPrice,
          discountPercentage,
          couponType: isPercentage ? "percentage" : "fixed",
          isActive: true,
          validFrom: new Date(),
          expirationDate: faker.date.future({ years: 1 }),
          maxUses: faker.number.int({ min: 50, max: 200 }),
          usedCount: 0,
          createdBy: course.courseInstructor._id, // Ensure it's an ObjectId
          description: faker.lorem.sentence(),
          minimumPurchaseAmount: faker.number.int({ min: 100, max: 300 }),
          restrictions: {
            oneTimePerUser: faker.datatype.boolean(),
            newStudentsOnly: faker.datatype.boolean(),
            specificCategories: [course.category],
          },
          appliedTo: {
            courses: [course._id],
            categories: [course.category],
            bundleOnly: false,
          },
        };
        coupons.push(coupon);
      }
    }

    // Insert all coupons
    const createdCoupons = await Coupon.insertMany(coupons);
    console.log(
      `Successfully created ${createdCoupons.length} coupons for ${courses.length} courses.`
    );
  } catch (error) {
    console.error("Error generating coupons:", error);
  }
};

const generateUpdatedDummyData = async () => {
  try {
    await connectDb();
    console.log("Database connection established.");
    await clearCollections();
    console.log("Deleted all db.");

    console.log("Seeding users...");
    const users = await createUsers();
    console.log(`${users.length} users created.`);

    console.log("Seeding courses...");
    const courses = await createCourses({ totalCourses: 10000 });
    if (courses && courses.length > 1) {
      console.log(`${courses.length} courses created.`);
    }

    await createInstructorProfiles();
    console.log("create instructor profiles completed.");

    console.log("Seeding sections...");
    const sections = await createSections();
    console.log(`${sections.length} sections created.`);

    console.log("Seeding lessons...");
    const lessons = await createLessons();
    console.log(`${lessons.length} lessons created.`);

    await simulateCoursePurchases();
    console.log("Simulate courses purchases completed");

    console.log("Seeding reviews...");
    await createReviews();
    console.log(`reviews created.`);

    console.log("Seeding reported reviews...");
    await createReportedReviews();

    await addCoursesToWishlistOfUsers();
    console.log("Simulate courses wishlists completed");

    await generateCouponsForCourses();
    console.log("Coupon generation completed.");

    console.log("All dummy data seeded successfully!");
    process.exit();
  } catch (err) {
    console.log("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateUpdatedDummyData();
