const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  postProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/productController.js");
const {UsersModel} = require("../models/userModel.js")
const {authentication, authorization} = require("../middlewares/authmiddlewares.js")
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // or use unique filename with Date.now()
  },
}
)

const upload = multer({storage:storage})




router.get("/", getAllProducts);
router.post("/",  authentication, upload.single("image"), authorization("admin") ,postProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
