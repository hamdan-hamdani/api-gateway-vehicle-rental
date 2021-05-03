const apiAdapter = require("../helper/apiAdapter");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const FormData = require("form-data");
const cloudinary = require("cloudinary").v2;
const upload = require("../helper/upload");

const api = apiAdapter(process.env.URL_SERVICE_USER);
exports.register = async (req, res) => {
  try {
    console.log(process.env.URL_SERVICE_USER);
    const user = await axios.post("https://service-user-vehicle-rental.herokuapp.com/users", req.body);
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

exports.login = async (req, res) => {
  try {
    const user = await axios.post("https://service-user-vehicle-rental.herokuapp.com/users/login", req.body);
    const data = user.data.result;
    const token = jwt.sign({ data }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
    return res.json({
      success: true,
      message: "Login success",
      result: {
        ...data,
        token,
      },
    });
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

exports.getProfile = async (req, res) => {
  try {
    const user = await axios.get(`https://service-user-vehicle-rental.herokuapp.com/users/${req.params.id}`);
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

exports.updateProfile = async (req, res) => {
  try {
    // console.log("controller");
    // const formData = new FormData();
    // if (req.file) {
    //   formData.append("image", req.file);
    // }
    // for (let key in req.body) {
    //   formData.append("email", req.body[key]);
    // }

    // const user = await axios.put(`http://localhost:5000/users/${req.params.id}`, formData);

    const filePath = await upload(req.file.path); // upload(req.file.path)
    console.log(filePath);

    // const user = await axios.put(`http://localhost:5000/users/${req.params.id}`, {
    //   ...req.body,
    //   image: filePath.url,
    // });
    // return res.json(user.data);
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
