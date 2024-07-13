import express from "express";
import { login, singup } from "../controller/userController.js";
import { verifyToken } from "../config/jwt.js";
const user = express.Router();

user.get("/", (req, res) => {
  res.send("user workes");
});
user.post("/singup", singup);
user.get("/login", login);
export default user;
