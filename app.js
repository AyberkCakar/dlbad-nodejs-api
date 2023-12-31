require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const serve = require("./serve");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "0.6mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serve);

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
