import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import connectToDatabase from "./config/db.js";
import User from "./models/UserSchema.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectToDatabase();

app.get("/sign-up", async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send({
      message: "Please provide all the details",
    });
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.send({
      message: "You already have account, Please login",
    });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        name: name,
        password: hashedPassword,
        email: email,
      });
      await user.save();
      return res.status(201).send(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server Started on port ${process.env.PORT}`)
);
