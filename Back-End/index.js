import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDatabase from "./config/db.js";
import User from "./models/UserSchema.js";
import upload from "./middleware/upload.js";
import verifyToken from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectToDatabase();

app.post("/sign-up", async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send({
      message: "Please provide all the details",
    });
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(409).json({
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

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send({
      message: "Please Provide All The Detail",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.Jwt_Secret_key, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.post("/upload", verifyToken, upload.single("file"), async (req, res) => {
  const file = req.file;
  const userId = req.user.userId;

  if (!file) {
    return res.status(400).json({ message: "Please upload a file" });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.pdfUploaded = { pdf: file.path };
  await user.save();
  return res.status(200).json({
    message: "File has been uploaded and user updated successfully!",
    filePath: file.path,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server Started on port ${process.env.PORT}`)
);
