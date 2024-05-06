const User = require("../Models/user-model");
const bcrypt = require("bcryptjs");
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
