const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const memberlist_itemRouter = require("./routes/api/memberList_item");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.use("/api/memberList_item", memberlist_itemRouter);
app.get("/", (req, res) => res.send("hello"));
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

// //const app = express();
// const mongoose = require("mongoose");
// const DATABASE_URL =
//   process.env.DATABASE_URL ||
//   "mongodb+srv://root:12345@therest.ltsjd.mongodb.net/restaurant?retryWrites=true&w=majority";

// mongoose.connect(DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to Database"));

// app.use(express.json());

// const RestRouter = require("./routes/rest");
// app.use("/rest", RestRouter);

// app.listen(3000, () => console.log("Server Started"));
