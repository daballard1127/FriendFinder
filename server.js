// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes.js');
var apiRoutes = require('./routing/apiRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Route declarations
app.use(htmlRoutes);
app.use(apiRoutes);














// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
