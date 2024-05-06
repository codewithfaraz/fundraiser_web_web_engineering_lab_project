const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  amount: Number,
  imageURL: String,
  username: String,
});
const project = mongoose.model("projectData", projectSchema);
module.exports = project;
