import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookiesParser from "cookies-parser";
import cors from "cors";
import bodyParser from "body-parser";
// ? utilities
import user from "./routers/userRoutes.js";
import connectDb from "./config/db.js";

// ? config
const app = express();
dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// ? routes
app.use("/user", user);

// ? listenning to port
app.listen(process.env.PORT, () => {
  console.log(`connnecting in link : https://localhost:${process.env.PORT}`);
});
