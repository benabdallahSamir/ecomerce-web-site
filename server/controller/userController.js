import { generateNewJwt } from "../config/jwt.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export async function singup(req, res) {
  const { username, email, password } = req.body;
  try {
    if (!email || !username || !password) {
      res.status(404).send("infomations is not found");
      return;
    }
    const isEmailToken = await User.findOne({ email });
    const isUserToken = await User.findOne({ username });
    if (isUserToken || isEmailToken) {
      res.status(500).send("user is alleadi ");
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashingPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashingPass,
    });
    const saveUser = await newUser.save();
    res.status(200).send({
      message: "user account is created",
      userInfo: saveUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error:  ${error.message}`);
  }
}
export async function login(req, res) {
  const { userKey, password: pass } = req.body;
  if (!userKey || !pass) {
    req.status(500).send("informations is not completed");
    return;
  }
  try {
    const userAccount = await User.findOne({
      $or: [{ username: userKey }, { email: userKey }],
    });
    const isCorrectPasswprd = await bcrypt.compare(pass, userAccount.password);
    if (!isCorrectPasswprd) {
      res.status(500).send("emai or password is incorrect");
      return;
    }
    res.status(200).send({
      userInfo: {
        id: userAccount._id,
        username: userAccount.username,
        email: userAccount.email,
      },
      token: await generateNewJwt(userAccount.username, userAccount.email),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
