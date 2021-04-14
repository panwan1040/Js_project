const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://root:12345@therest.ltsjd.mongodb.net/restaurant?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

// schema for member
const memberSchema = {
  username: String,
  password: String,
};

const Member = mongoose.model("Member", memberSchema);

let url = "/login.html";

app.get("/", function (req, res) {
  // console.log("xxxxxxxxxxxxxxxxxxxx" + req.body.regis + "ss");
  if (req.body.regis) {
    url = "/regis.html";
    // res.redirect("/regis.html");
    res.sendFile(__dirname + url);
  } else res.sendFile(__dirname + url);
});

//post
app.post("/", function (req, res) {
  if (req.body.regis) url = "/regis.html";
  if (req.body.username + "".trim() === "") {
    //console.log("wrong");
    res.redirect("/");
  } else if (req.body.password + "".trim() === "") {
    res.redirect("/");
    //console.log("wrong");
  } else if (req.body.password !== req.body.password2) {
    res.redirect("/");
    //console.log("wrong");
  } else {
    //console.log("save");
    let NewMem = new Member({
      username: req.body.username,
      password: req.body.password,
    });
    NewMem.save();
    url = "/login.html";
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
