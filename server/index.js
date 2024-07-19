import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// ? utilities
import user from "./routers/userRoutes.js";
import connectDb from "./config/db.js";

// ? config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connectDb();
app.use(cors());
// ? routes
app.use("/user", user);

// ? listenning to port
app.listen(process.env.PORT, () => {
  console.log(`connnecting in link : https://localhost:${process.env.PORT}`);
});
