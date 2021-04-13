const { Schema, model } = require("mongoose");

const member_list = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    collection: "members",
  }
);

const member_item = model("member_item", member_list);
module.exports = member_item;
