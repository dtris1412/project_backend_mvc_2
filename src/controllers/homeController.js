const conection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDservieces");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  console.log(results);
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const getXYZ = (req, res) => {
  res.send("get XYZ");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  conection.query(
    `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    [email, name, city],
    function (err, result) {
      console.log("email =", email, "name = ", name, "city = ", city);
      res.send("user is created");
    }
  );
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  console.log(userId);
  res.render("edit.ejs", { userEdit: user });
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const postDeletePage = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getXYZ,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
  postHandleRemoveUser,
};
