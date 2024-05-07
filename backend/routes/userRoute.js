const express = require("express");
const router = express.Router();
const userController = require("./../Controller/userController");
router.post("/signup", userController.addUser);
router.post("/login", userController.userLogin);
router.get("/verfiyuser/:email/:token", userController.verifyUser);
module.exports = router;
