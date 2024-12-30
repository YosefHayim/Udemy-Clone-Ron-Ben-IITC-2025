const mongoose = require("mongoose");
const faker = require("@faker-js/faker").faker;
const bcrypt = require("bcrypt");

const User = require("./models/user/userModel");
const Review = require("./models/review/reviewModel");
const Comment = require("./models/review/commentModel");
const Course = require("./models/course/courseModel");
const Enrollment = require("./models/course/enrollmentModel");
const Category = require("./models/course/categoryModel");
const Coupon = require("./models/course/couponModel");
const Lesson = require("./models/course/lessonModel");
const Notification = require("./models/other/notificationModel");
const Payment = require("./models/transaction/paymentModel");
const Order = require("./models/transaction/orderModel");
const Wishlist = require("./models/other/wishlistModel");
const Certificate = require("./models/other/certificateModel");

const connectDb = require("./config/connectDb");

const generateDummyData = async () => {
  try {
    await connectDb();

    // Clear all collections
    await User.deleteMany({});
    await Review.deleteMany({});
    await Comment.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    await Category.deleteMany({});
    await Coupon.deleteMany({});
    await Lesson.deleteMany({});
    await Notification.deleteMany({});
    await Payment.deleteMany({});
    await Order.deleteMany({});
    await Wishlist.deleteMany({});
    await Certificate.deleteMany({});

    // Generate Users
    const users = [];
    for (let i = 0; i < 20; i++) {
      const password = "password123";
      const hashedPassword = await bcrypt.hash(password, 10);

      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        passwordConfirm: hashedPassword,
        emailVerified: faker.datatype.boolean(),
        photo: faker.image.avatar(),
        role: faker.helpers.arrayElement(["student", "instructor"]),
      });
    }
    const createdUsers = await User.insertMany(users);

    // Generate Categories
    const categories = [];
    for (let i = 0; i < 5; i++) {
      categories.push({
        name: faker.commerce.department(),
        slug: faker.lorem.slug(),
      });
    }
    const createdCategories = await Category.insertMany(categories);

    // Generate Courses
    const courses = [];
    for (let i = 0; i < 10; i++) {
      courses.push({
        title: faker.lorem.words(5),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(10, 200, 2),
        category: faker.helpers.arrayElement(createdCategories)._id,
        instructor: faker.helpers.arrayElement(
          createdUsers.filter((user) => user.role === "instructor")
        )._id,
        averageRating: faker.datatype.float({ min: 0, max: 5, precision: 0.1 }),
      });
    }
    const createdCourses = await Course.insertMany(courses);

    // Generate Lessons
    const lessons = [];
    for (let i = 0; i < 50; i++) {
      lessons.push({
        title: faker.lorem.words(3),
        content: faker.lorem.paragraph(),
        duration: faker.datatype.number({ min: 5, max: 60 }),
        course: faker.helpers.arrayElement(createdCourses)._id,
      });
    }
    await Lesson.insertMany(lessons);

    // Generate Reviews
    const reviews = [];
    for (let i = 0; i < 20; i++) {
      reviews.push({
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(2),
        userId: faker.helpers.arrayElement(createdUsers)._id,
      });
    }
    const createdReviews = await Review.insertMany(reviews);

    // Generate Comments
    const comments = [];
    for (let i = 0; i < 20; i++) {
      comments.push({
        comment: faker.lorem.sentence(2),
        reviewId: faker.helpers.arrayElement(createdReviews)._id,
      });
    }
    await Comment.insertMany(comments);

    // Generate Enrollments
    const enrollments = [];
    for (let i = 0; i < 30; i++) {
      enrollments.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        course: faker.helpers.arrayElement(createdCourses)._id,
        progress: faker.datatype.number({ min: 0, max: 100 }),
      });
    }
    await Enrollment.insertMany(enrollments);

    // Generate Coupons
    const coupons = [];
    for (let i = 0; i < 10; i++) {
      coupons.push({
        code: faker.random.alphaNumeric(8).toUpperCase(),
        discountPercentage: faker.datatype.number({ min: 5, max: 50 }),
        course: faker.helpers.arrayElement(createdCourses)._id,
        validFrom: faker.date.recent(),
        validUntil: faker.date.soon(30),
      });
    }
    await Coupon.insertMany(coupons);

    // Generate Orders
    const orders = [];
    for (let i = 0; i < 10; i++) {
      orders.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        courses: [faker.helpers.arrayElement(createdCourses)._id],
        totalPrice: faker.commerce.price(50, 500, 2),
        status: faker.helpers.arrayElement(["pending", "completed", "failed"]),
      });
    }
    const createdOrders = await Order.insertMany(orders);

    // Generate Payments
    const payments = [];
    for (let i = 0; i < 10; i++) {
      payments.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        order: faker.helpers.arrayElement(createdOrders)._id,
        amount: faker.commerce.price(50, 500, 2),
        status: faker.helpers.arrayElement(["success", "failed"]),
      });
    }
    await Payment.insertMany(payments);

    // Generate Wishlists
    const wishlists = [];
    for (let i = 0; i < 10; i++) {
      wishlists.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        courses: [faker.helpers.arrayElement(createdCourses)._id],
      });
    }
    await Wishlist.insertMany(wishlists);

    // Generate Notifications
    const notifications = [];
    for (let i = 0; i < 20; i++) {
      notifications.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        message: faker.lorem.sentence(),
        type: faker.helpers.arrayElement([
          "courseUpdate",
          "review",
          "reminder",
        ]),
      });
    }
    await Notification.insertMany(notifications);

    // Generate Certificates
    const certificates = [];
    for (let i = 0; i < 10; i++) {
      certificates.push({
        user: faker.helpers.arrayElement(createdUsers)._id,
        course: faker.helpers.arrayElement(createdCourses)._id,
        issuedAt: faker.date.recent(),
        certificateURL: faker.internet.url(),
      });
    }
    await Certificate.insertMany(certificates);

    console.log("All dummy data generated successfully!");
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateDummyData();
