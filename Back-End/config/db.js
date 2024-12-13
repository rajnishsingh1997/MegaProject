import mongoose from "mongoose";
const connectToDatabase = () => {
  mongoose
    .connect(process.env.Mongo_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));
};

export default connectToDatabase;
