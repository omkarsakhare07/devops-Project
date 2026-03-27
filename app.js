const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello,This is my First DevOps project");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
