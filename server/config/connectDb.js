const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  if (process.env.NODE_ENV === "production") {
    mongoose.set("debug", true); // Enables query logging in production
  }
  try {
    const connection = await mongoose.connect(process.env.DB_URI);

    if (connection) {
      console.log(`Connected successfully to database`);
    }
  } catch (error) {
    console.error(`Error occurred durning login to database: `, error);
  }
};

module.exports = connectDb;
