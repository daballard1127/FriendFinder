
// Dependencies.

var express = require("express");
var router = express.Router();
var path = require("path");




// This route will be the default catch all route
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// This route will send the user to the survey page
router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;