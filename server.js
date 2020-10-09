//Requires the necessary module
const express = require("express");
const mongooseDB = require("mongoose")
const Workout = require("./models/model")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Requires routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//Connects to Mongoose DB
mongooseDB.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
})
.then(e => {console.log("Express Hooked up to MongoDB!!!")});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
