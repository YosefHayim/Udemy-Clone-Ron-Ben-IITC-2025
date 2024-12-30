const mongoose = require("mongoose");
const faker = require("@faker-js/faker").faker;
const User = require("./models/userModel");
const Review = require("./models/reviewModel");
const Comment = require("./models/commentModel");
const connectDb = require("./config/connectDb");
const bcrypt = require("bcrypt");

const generateDummyData = async () => {
  try {
    await connectDb();

    // Clear existing data
    await User.deleteMany({});
    await Review.deleteMany({});
    await Comment.deleteMany({});

    // Generate Users
    const users = [];
    for (let i = 0; i < 20; i++) {
      const password = "password123";
      const hashedPassword = await bcrypt.hash(
        password + process.env.BCRYPT_PW,
        10
      );

      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        passwordConfirm: hashedPassword,
        emailVerified: faker.datatype.boolean(),
        location: {
          coordinates: [faker.location.longitude(), faker.location.latitude()],
          firstAddress: faker.location.streetAddress(),
        },
        role: faker.helpers.arrayElement(["guest", "user", "admin"]),
      });
    }
    const createdUsers = await User.insertMany(users);

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

    console.log(
      "Dummy data generated and relationships established successfully!"
    );
    process.exit();
  } catch (err) {
    console.error("Error generating dummy data:", err);
    process.exit(1);
  }
};

generateDummyData();
