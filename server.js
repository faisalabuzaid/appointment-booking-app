const express = require("express");
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static("dist"));

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
