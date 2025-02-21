const conection = require("../config/database");
const getHomepage = (req, res) => {
  let Users = [];
  conection.query("select * from Users", function (err, result, fields) {
    Users = result;
    console.log("check result>>>", result);
    console.log.apply("check users>>>", Users);
    res.send(JSON.stringify(Users));
  });
  //xu ly data
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const getXYZ = (req, res) => {
  res.send("get XYZ");
};
module.exports = {
  getHomepage,
  getABC,
  getXYZ,
};
