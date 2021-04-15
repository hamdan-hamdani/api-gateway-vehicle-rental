const express = require("express");
const router = express.Router();
const verifyToken = require("../midleware/tokenVerify");
const formMiddleware = require("../midleware/formMiddleware");

const userController = require("../controller/user");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", verifyToken, userController.getProfile);
router.put("/:id", formMiddleware, userController.updateProfile);

module.exports = router;
