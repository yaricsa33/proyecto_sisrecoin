const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/proyecto-sena"));

app.get("/*", (req, res) => {
  res.sendFile("/dist/proyecto-sena/index.html");
});

app.listen(PORT, () => {
  console.log("servidor angular", PORT);
});
