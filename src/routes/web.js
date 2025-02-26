const express = require("express");
const {
  getHomepage,
  getABC,
  getXYZ,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/xyz", getXYZ);
router.post("/create_user", postCreateUser);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.post("/update_user", postUpdateUser);
router.post("/delete_user/:userId", postDeletePage);
router.post("/delete_user", postHandleRemoveUser);
module.exports = router;
