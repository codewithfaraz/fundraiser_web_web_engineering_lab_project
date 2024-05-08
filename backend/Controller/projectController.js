const project = require("./../Models/project-model");
exports.addProject = async (req, res) => {
  try {
    const newProject = await project.create(req.body);
    res.status(200).json({ status: "Succes", newProject });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err,
    });
  }
};
exports.getProject = async (req, res) => {
  try {
    const user = req.params.username;
    const projects = await project.find({ username: user });
    console.log(projects);
    res.status(200).json({
      status: "success",
      projects,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err,
    });
  }
};
exports.getAllProjects = async (req, res) => {
  try {
    const allProjects = await project.find();
    res.status(200).json({
      status: "success",
      allProjects,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "error in getAllProject function",
    });
  }
};
exports.getAllProjectsByCategory = async (req, res) => {
  try {
    const c = req.params.category;
    const allProjects = await project.find({ category: c });
    res.status(200).json({
      status: "success",
      allProjects,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "error from gett projects by category",
    });
  }
};
