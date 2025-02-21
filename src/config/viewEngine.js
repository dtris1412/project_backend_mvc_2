const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  //Config view Template
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //static file
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
