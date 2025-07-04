import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "MongodbAgreecator",
    });
  } catch (error) {
    console.log("error to connect to the mongodb", (error as Error).message);
  }
};
