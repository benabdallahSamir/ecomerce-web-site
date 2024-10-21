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
app.use(cors());
dotenv.config();
connectDb();
// ? routes
app.use("/user", user);

// ? listenning to port
app.listen(process.env.PORT, () => {
  console.log(`connnecting in link : https://localhost:${process.env.PORT}`);
});
