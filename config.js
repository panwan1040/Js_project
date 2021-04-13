require("dotenv").config();
module.exports = {
  mongoUri: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
};

//mongodb+srv://root:12345@therest.ltsjd.mongodb.net/restaurant?retryWrites=true&w=majority
