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
const url  = "mongodb+srv://root:root@cluster0.j8t99.mongodb.net/workout";
mongooseDB.connect( url || process.env.MONGODB_URI, {
  useNewUrlParser: true
})
.then(e => {console.log("Application coonection to backend completed!!!")});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
