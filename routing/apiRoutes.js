var express = require("express");
var router = express.Router();
var path = require("path");
var friends = require("../app/data/friends.js");




// This route will be the default catch all route
router.get("/api/friends", function(req, res) {

	//  This will be used to display a JSON of all possible friends.
	res.json(friends);
	// console.log("get", friends)

});

// This route will send the user to the survey page
router.post("/api/friends", function(req, res) {
	// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

	// Capture the user input object
		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));
		var userName = userInput.name;
		console.log("userName = " + userName);
		var userResponses = userInput.scores;
		console.log('userResponses = ' , userResponses);


		// This is where the wheels fall off the bus. It cannot read the array of data
		// userResponses comes back undefined. I can not find the issue

		// The following is the rest of the pseudo code to compare and find the Best Match

	
		// Compute best friend match
	// 	var matchName = '';
	// 	var matchImage = '';
	// 	var totalDifference = 10000; // Make the initial value big for comparison

	// 	// Examine all existing friends in the list
	// 	for (var i = 0; i < friends.length; i++) {
	// 		console.log('friend = ' + JSON.stringify(friends[i]));

	// 		// Compute differenes for each question
	// 		var diff = 0;
	// 		for (var j = 0; j < userResponses.length; j++) {
	// 			diff += Math.abs(friends[i].scores[j] - userResponses[j]);
	// 		}
	// 		// console.log('diff = ' + diff);

	// 		// If lowest difference, record the friend match
	// 		if (diff < totalDifference) {
	// 			// console.log('Closest match found = ' + diff);
	// 			// console.log('Friend name = ' + friends[i].name);
	// 			// console.log('Friend image = ' + friends[i].photo);

	// 			totalDifference = diff;
	// 			matchName = friends[i].name;
	// 			matchImage = friends[i].photo;
	// 		}
	// 	}

	// 	// Add new user
	// 	friends.push(userInput);

	// 	// Send appropriate response
	// 	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	// });
	

 });

module.exports = router;