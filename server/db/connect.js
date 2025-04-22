import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log("An error occurred while connecting to the database", error);
    process.exit(1);
  }
};


export default connectDb;