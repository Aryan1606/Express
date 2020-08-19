const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routing = require("./routes/route");

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const db = require("./config/keys").mongoURI;

//Connecting to Mongo DB Using MongoDB Atlas.
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.render("route/index"));

app.use("/route", routing);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) console.log(error.message);
  console.log(`Server running on port ${5000}`);
});
