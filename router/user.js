const express = require("express");
const router = express.Router();
const verifyToken = require("../midleware/tokenVerify");

const userController = require("../controller/user");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", verifyToken, userController.getProfile);

module.exports = router;
