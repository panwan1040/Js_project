var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var mongo_uri =
  "mongodb+srv://root:12345@therest.ltsjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

// path สำหรับ MongoDB ของเรา
var Member = require("./routes/members_rout");
app.use("/api/member", Member);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});
