import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// ? utilities
import user from "./routers/userRoutes.js";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";

// ? config
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ! write doc for this and why i use it and what need in react req to work
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
dotenv.config();
connectDb();
// ? routes
app.use("/user", user);

// ? listenning to port
app.listen(process.env.PORT, () => {
  console.log(`connnecting in link : http://localhost:${process.env.PORT}`);
});
