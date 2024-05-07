const express = require("express");

const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");
const projectRoutes = require("./routes/projectRoute");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const project = require("./Models/project-model");
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
//routes
app.use("/user", userRoutes);
app.use("/project", projectRoutes);
//listening to server
app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
