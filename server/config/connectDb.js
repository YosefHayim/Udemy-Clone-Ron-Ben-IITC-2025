const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
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
