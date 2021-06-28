const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/rules", (req, res) => {
    res.render("rules");
});

app.listen(port, () => {
    console.log(`jes.earth site listening on http://localhost:${port}`);
});