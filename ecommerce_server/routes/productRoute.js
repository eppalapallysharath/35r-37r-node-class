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
const {authentication, authorization} = require("../middlewares/authmiddlewares.js");
const { upload } = require("../config/Multer.js");



router.get("/", getAllProducts);
router.post("/",  authentication, upload.single("image"), authorization("admin") ,postProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
