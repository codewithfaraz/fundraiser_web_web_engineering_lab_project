const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  price: Number,
  picture: Buffer,
});
const project = mongoose.model("projectData", projectSchema);
module.exports = project;
