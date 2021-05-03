const apiAdapter = require("../helper/apiAdapter");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const api = apiAdapter(process.env.URL_SERVICE_USER);
exports.createNewVehicle = async (req, res) => {
  try {
    console.log(process.env.URL_SERVICE_USER);
    const user = await axios.post("https://service-vehicle-vehicle-rental.herokuapp.com/vehicle", req.body);
    return res.json(user.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        success: false,
        message: "Service unavailable",
      });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};

// exports.login = async (req, res) => {
//   try {
//     const user = await axios.post("http://localhost:5001/users/login", req.body);
//     const data = user.data.result;
//     const token = jwt.sign({ data }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
//     return res.json({
//       success: true,
//       message: "Login success",
//       result: {
//         ...data,
//         token,
//       },
//     });
//   } catch (error) {
//     if (error.code === "ECONNREFUSED") {
//       return res.status(500).json({
//         success: false,
//         message: "Service unavailable",
//       });
//     }
//     const { status, data } = error.response;
//     return res.status(status).json(data);
//   }
// };

exports.getConditionVehicle = async (req, res) => {
  try {
    const user = await axios.get(`https://service-vehicle-vehicle-rental.herokuapp.com/vehicle/`);
    return res.json(user.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        success: false,
        message: "Service unavailable",
      });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const user = await axios.put(`https://service-vehicle-vehicle-rental.herokuapp.com/vehicle/${req.params.id}`, req.body);
    return res.json(user.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        success: false,
        message: "Service unavailable",
      });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const user = await axios.delete(`https://service-vehicle-vehicle-rental.herokuapp.com/vehicle/${req.params.id}`);
    return res.json(user.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        success: false,
        message: "Service unavailable",
      });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
