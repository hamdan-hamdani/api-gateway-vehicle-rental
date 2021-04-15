const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const name = `${file.originalname.toLowerCase().split(" ").join("-")}-${day}-${month}-${year}`;

    callback(null, name);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(new Error("Only png, jpg, or jpeg file"));
    }
  },
  limits: {
    fieldSize: 4 * 1000 * 1000,
  },
});

const formMiddleware = (req, res, next) => {
  const multerUpload = upload.single("image");
  multerUpload(req, res, (err) => {
    // if (!req.body.image) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "File cant be empty",
    //   });
    // }
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    next();
  });
};

module.exports = formMiddleware;
