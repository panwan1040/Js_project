//const app = express();
const mongoose = require("mongoose");
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://root:12345@therest.ltsjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const RestRouter = require("./routes/rest");
app.use("/rest", RestRouter);

app.listen(3000, () => console.log("Server Started"));
