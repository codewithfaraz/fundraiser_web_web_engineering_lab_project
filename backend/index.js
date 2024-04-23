const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./Models/user-model");
dotenv.config({ path: "./config.env" });
const app = express();
//middlerwares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("Database connected");
  });
app.post("/user/signup", async (req, res) => {
  try {
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
});
//listening to server
app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
