const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;
const root = path.join(__dirname, "dist", "proyecto-sena");

app.use(express.static(__dirname + "/dist/proyecto-sena"));

app.get("/*", (req, res) => {
  fs.stat(root + req.path, function (err) {
    if (err) {
      res.sendFile("index.html", { root });
    } else {
      res.sendFile(req.path, { root });
    }
  });
});

app.listen(PORT, () => {
  console.log("servidor angular", PORT);
});
