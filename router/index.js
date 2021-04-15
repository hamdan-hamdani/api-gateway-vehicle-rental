const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const vehicleRoutes = require("./vehicle");
const orderRoutes = require("./order");

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "This app is api-gateway for service vehicle rental apps",
  });
});

router.use("/users", userRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/order", orderRoutes);

router.all("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Url is not valid, please check the documentation",
  });
});

module.exports = router;
