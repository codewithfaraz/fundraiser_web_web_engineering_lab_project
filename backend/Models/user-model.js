const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter username"],
  },
  email: {
    type: String,
    required: [true, "plz enter the email"],
    unique: true,
    validate: [validator.isEmail, "plz enter the correct email"],
  },
  phonenumber: String,
  password: {
    type: String,
    reuired: [true, "plz enter the password"],
    minlength: 8,
  },
  confirmpassword: {
    type: String,
    minlength: 8,
    validate: {
      validator: function (confirmPassword) {
        return this.password === confirmPassword;
      },
      message: "Both password and confirm password must be same",
    },
  },
});

const User = mongoose.model("webuser", userSchema);
module.exports = User;
