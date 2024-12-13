import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import  connectToDatabase  from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())

connectToDatabase()

