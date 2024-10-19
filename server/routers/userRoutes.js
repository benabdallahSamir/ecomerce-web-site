import express from "express";
// import controller's function
import {
  login,
  singup,
  updateAdminUser,
  updateUserInfo,
} from "../controller/userController.js";
// init routers
const user = express.Router();
// routers
user.get("/", (req, res) => {
  res.send("user workes");
});
user.post("/singup", singup);
user.get("/login", login);
user.patch("/:userId", updateAdminUser);
user.put("/:id", updateUserInfo);

// export routers
export default user;
