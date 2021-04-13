require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("This is api gateway for vehicle rental app");
});
