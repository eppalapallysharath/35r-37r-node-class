const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  postProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/productController.js");

router.get("/", getAllProducts);
router.post("/", postProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
