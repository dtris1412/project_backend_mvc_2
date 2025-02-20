const getHomepage = (req, res) => {
  //xu ly data
  res.send("Hello World!");
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
