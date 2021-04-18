const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));
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
let id = "";
let checker = ""; // for check username in mongodb - for register

app.get("/public", function (req, res) {
  console.log("Xx");
});

app.get("/", function (req, res) {
  // console.log("xxxxxxxxxxxxxxxxxxxx" + req.body.regis + "ss");
  if (req.body.regis) {
    url = "/regis.ejs";
    console.log("regis");
    // res.redirect("/regis.html");
    res.render(__dirname + url, { checker: checker });
  } else {
    res.render(__dirname + url, { id: id, checker: checker }); //login
  }
});

//post
app.post("/", function (req, res) {
  if (req.body.regis) {
    url = "/regis.ejs";
  } // จากล็อกอินฟอร์ม
  //////////////////////////////
  //for register
  if (url == "/regis.ejs") {
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
      run();
      checker = "";
      async function run() {
        await Member.find(async function (err, data) {
          for await (const key of data) {
            // console.log(key.username);
            if (req.body.username === key.username) {
              console.log(key.username + " <<");
              checker = "fail";
              console.log(checker + " 1");
              // console.log(url);
              break;
            }
          }
        });

        console.log(" 2 jaaaa");

        console.log(checker);
        if (checker !== "fail") {
          console.log(checker + " 3 not fail");
          url = "/login.html";
          console.log("save");
          let NewMem = new Member({
            username: req.body.username,
            password: req.body.password,
          });
          NewMem.save();
        }
        console.log(checker + " <<");
        res.redirect("/");
      }
    }
  } else {
    console.log("login");
    /////////////// for login
    //ตรวจรหัส
    //เปลี่ยนไปหน้าร้านค้า
    Member.find(function (err, data) {
      // if (err) return console.error(err);
      for (const key of data) {
        if (req.body.username === key.username)
          if (req.body.password === key.password) {
            // console.log("ww");
            id = req.body.username;
            // console.log(id + " << id");
            url = "/public/index.ejs";

            break;
          } else {
            console.log("password wrong jaa");
            break;
          }
        else {
        }
      }
      res.redirect("/");
    });
  }
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
