import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI || "");

    if (connection) {
      // console.log(`Connected successfully to database`);
    }
  } catch (error) {
    console.log(`Error occurred durning login to database: `, error);
  }
};

export default connectDb;
