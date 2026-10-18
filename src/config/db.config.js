import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect("mongodb://mongo-container", {
      dbName: "mohamed",
    });
  } catch (error) {
    console.log(error);
  }
}
