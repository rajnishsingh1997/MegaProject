import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT;
const mongoUri = process.env.MONGODB_URI;

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
});

app.listen(port,()=>{
    console.log(`server active on port ${port}`)
})
