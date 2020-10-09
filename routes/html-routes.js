//Require the necessary module
const router = require('express').Router();
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

//Routing for /exercises
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

//Routing for /stats 
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

//Routing for everything else on the app port
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  //exports router
  module.exports = router;