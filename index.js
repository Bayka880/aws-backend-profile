const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const nameJson = require("./models/name.json");
const ageJson = require("./models/age.json");
const majorJson = require("./models/major.json");
const fs = require("fs");
const image = `${__dirname}/models/profile.jpg`;
const profile = require("./models/profile.json");
const disc = require("./models/description.json");
const cors = require("cors");
const dessert = require("./models/dessert.json");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/api/:name", cors(), (req, res) => {
  if (req.params.name == "name") {
    res.send(nameJson);
  } else if (req.params.name == "age") {
    res.send(ageJson);
  } else if (req.params.name == "major") {
    res.send(majorJson);
  } else if (req.params.name == "picture") {
    res.send(image);
  } else if (req.params.name == "profile") {
    res.send(profile);
  } else if (req.params.name == "description") {
    res.send(disc);
  }
  res.end();
});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

// app.get("/ejs", (req, res) => {
//   res.render("index", { name: "Bayna" });
// });
app.get("/ejs", (req, res) => {
  var data = {
    name: "Dessert",
    a: dessert,
    b: [
      "/Images/cinnamon.webp",
      "/Images/pumpkin.jpeg",
      "/Images/donuits.webp",
    ],
  };
  res.render("index", { data: data });
});

app.listen(port);
console.log(process.env.PORT);
