const User = require("../Models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
exports.addUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        status: "fail",
        message: "user already exists",
      });
    }
    user = await User.findOne({ username: req.body.username });
    if (user?.username === req.body.username) {
      return res.status(401).json({
        status: "fail",
        message: "same user name already exist try different",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const userToAdd = {
      ...req.body,
      password: hashedPassword,
    };
    const newUser = await User.create(userToAdd);
    res.status(200).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      // User not found
      res.status(400).json({ status: "fail", message: "User not found" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // Password correct, generate token
      const token = jwt.sign({ user: user.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      });
      res.status(200).json({ status: "success", token, user });
    } else {
      // Incorrect password
      res.status(401).json({
        status: "fail",
        message: "Incorrect password",
      });
    }
  } catch (err) {
    // Server error
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
exports.verifyUser = async (req, res) => {
  const email = req.params.email;
  const token = req.params.token;
  if (!email || !token) {
    return res
      .status(401)
      .json({ status: "fail", message: "Plz Login in first" });
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      status: "fail",
      message: "Token has been expired",
    });
  }
  const userStilExist = User.findOne(decoded.user);
  if (!userStilExist) {
    return res
      .status(401)
      .json({ status: "fail", message: "user have been deleted" });
  }
  res.status(200).json({
    status: "success",
    message: "You are exist",
  });
};
