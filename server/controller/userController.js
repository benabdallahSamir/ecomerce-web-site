import { decodingJwt, generateNewJwt } from "../config/jwt.js";
import {
  comparePasswords,
  generatePassword,
  generateUser,
} from "../config/user.js";
import User from "../models/userModel.js";

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
      res.status(500).send("user or email is allready exist !!!! ");
      return;
    }
    const hashingPass = await generatePassword(password);
    const newUser = new User({
      username,
      email,
      password: hashingPass,
    });
    const saveUser = await newUser.save();
    const token = await generateNewJwt(saveUser._id);
    res.cookie("token", token, { httpOnly: true, secure: true });
    res.status(200).send({
      isLoggin: true,
      userInfo: generateUser(saveUser),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error:  ${error.message}`);
  }
}
export async function login(req, res) {
  const { userKey, password: pass } = req.body;
  if (!userKey || !pass) {
    res.status(404).send("informations is not completed");
    return;
  }
  try {
    const userAccount = await User.findOne({
      $or: [{ username: userKey }, { email: userKey }],
    });
    if (!userAccount) {
      res.status(404).send("user account not found");
      return;
    }
    const isCorrectPasswprd = await comparePasswords(
      userAccount.password,
      pass
    );
    if (!isCorrectPasswprd) {
      res.status(500).send("emai or password is incorrect");
      return;
    }
    const token = await generateNewJwt(userAccount._id);
    res.cookie("token", token, { httpOnly: true, secure: true });
    res.status(200).send({
      userInfo: generateUser(userAccount),
      isLoggin: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
export async function updateUserInfo(req, res) {
  const { id } = req.params;
  const { password, email, username, currentPassword } = req.body;
  if (!id) {
    res.status(404).send("user id is not found");
    return;
  }
  if (!(password && email && username && currentPassword)) {
    res.status(500).send("all information is empty");
    return;
  }
  try {
    const userInfo = await User.findById(id);
    if (!userInfo) {
      res.status(404).send("user not found");
      return;
    }
    let isUpdated = false;
    if (email) {
      if (email !== userInfo.email) {
        if (await User.findOne({ email })) {
          res.status(500).send("email id already used");
          return;
        }
        userInfo.email = email;
        isUpdated = true;
      }
    }
    if (username) {
      if (username !== userInfo.username) {
        if (await User.findOne({ username })) {
          res.status(500).send("username id already used");
          return;
        }
        userInfo.username = username;
        isUpdated = true;
      }
    }
    if (password || currentPassword) {
      if ((password && !currentPassword) || (!password && currentPassword)) {
        res.status(500).send("passwordInfo is not complated");
        return;
      }
      const isCorrectPasswprd = await comparePasswords(
        userInfo.password,
        currentPassword
      );
      if (!isCorrectPasswprd) {
        res.status(500).send("currentPassword not correct");
        return;
      }
      if (password !== currentPassword) {
        userInfo.password = await generatePassword(password);
        isUpdated = true;
      }
    }
    if (!isUpdated) {
      res.status(201).send("nothing new");
      return;
    }
    const userUpdated = await userInfo.save();
    res.status(200).send({
      message: "updating successfuly",
      userInfo: generateUser(userUpdated),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
export async function isLoggin(req, res) {
  try {
    const token = req.cookies["token"];
    if (!token) {
      res.status(200).send({ isLoggin: false });
      return;
    }
    const { id } = await decodingJwt(token);
    const exsistingUser = await User.findById(id);
    if (!exsistingUser) {
      res.status(200).send({
        isLoggin: false,
      });
      return;
    }
    res.status(200).send({
      userInfo: generateUser(exsistingUser),
      isLoggin: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}
export async function logOut(req, res) {
  res.cookie("token", "", { httpOnly: true, secure: true });
  res.status(200).send({
    isLoggin: false,
  });
}
