const express = require("express");
const app = express();
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web.js");
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use("/test", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
