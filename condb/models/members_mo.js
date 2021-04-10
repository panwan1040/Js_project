let mongoose = require("mongoose");

let memberSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "members",
  }
);

let Member = mongoose.model("members", memberSchema);
module.exports = Member;
