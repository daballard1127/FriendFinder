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
		
		
		console.log("userInput " + JSON.stringify(userInput));
	
		var userResponses = userInput.scores;
		console.log("User Input scores " + userResponses);

		var userImage = userInput.profilePic;
		console.log("User Input image " + JSON.stringify(userImage));


		// Take the user input scores and for each person in the friends array
		// compute the absolute value difference value in the arrays.
		// Take each calucated value and store it in it's own array

	
		
	 	// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

		// 	// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
		// 	// console.log('diff = ' + diff);
			var totalDifference = 100;
		// 	// If lowest difference, record the friend match
			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

			}
		}

	 	// Add new user to server instances when server is restarted the new user is not added to friends.js
		friends.push(userInput);
		
		res.json({ matchName: matchName,
				   matchImage: matchImage});
	});
	
// console log statements are commented out currently. Can be uncommented for troubleshooting purposes.
 

module.exports = router;