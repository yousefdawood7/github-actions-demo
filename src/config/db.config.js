import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_NAME}`, {
      dbName: "mohamed",
    });
  } catch (error) {
    console.log(error);
  }
}
