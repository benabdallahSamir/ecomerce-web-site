import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("coonecting in mongodb");
  } catch (error) {
    console.log(`ERROR : ${error.message}`);
  }
};
export default connectDb;