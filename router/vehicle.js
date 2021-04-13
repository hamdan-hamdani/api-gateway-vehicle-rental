const express = require("express");
const router = express.Router();
const verifyToken = require("../midleware/tokenVerify");

const vehicleController = require("../controller/vehicle");

router.post("/", vehicleController.createNewVehicle);
router.get("/", vehicleController.getConditionVehicle);
router.put("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
