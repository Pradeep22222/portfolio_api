import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    // const MONGO_CLIENT = "mongodb://localhost/portfolio";
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
