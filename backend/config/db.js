import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose connected at ${conn.connection.host}`);
  } catch (err) {
    console.log("Error", err);
  }
};

export default dbConnect;
