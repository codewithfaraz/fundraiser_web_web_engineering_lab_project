const projectControllers = require("../Controller/projectController");
const express = require("express");
const router = express.Router();
router.post("/addproject", projectControllers.addProject);
router.get("/getprojects/:username", projectControllers.getProject);
router.get("/getallprojects", projectControllers.getAllProjects);
router.get(
  "/getallprojects/:category",
  projectControllers.getAllProjectsByCategory
);
module.exports = router;
