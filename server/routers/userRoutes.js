import express from "express";
// import controller's function
import {
  login,
  singup,
  isLoggin,
  updateAdminUser,
  updateUserInfo,
  logOut,
} from "../controller/userController.js";
// init routers
const user = express.Router();
// routers
user.get("/", (req, res) => {
  res.send("user workes");
});
user.post("/singup", singup);
user.post("/login", login);
user.patch("/:userId", updateAdminUser);
user.put("/:id", updateUserInfo);
user.get("/isLoggin", isLoggin);
user.get("/logout",logOut);

// export routers
export default user;
