import mongoose from "mongoose";

const db = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Qcheck",
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default db;
