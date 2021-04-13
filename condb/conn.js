var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://root:12345@therest.ltsjd.mongodb.net/restaurant?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("restaurant");
  var myobj = { username: "Company Inc", password: "Highway 37" };

  dbo.collection("members").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
