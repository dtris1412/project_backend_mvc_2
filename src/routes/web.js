const express = require("express");
const {
  getHomepage,
  getABC,
  getXYZ,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/xyz", getXYZ);
module.exports = router;
