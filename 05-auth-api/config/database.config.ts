import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
