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

	var friendMatch = {
			name: "",
			photo: "",
			
		};

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

			var totalDifference = 100;
			var diff = 0;
	 	// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));
			diff = 0;
		// 	// Compute differenes for each question
			
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userResponses[j]));
				// console.log("Diff1 " + diff)
			}
		// 	// console.log('diff = ' + diff);
			
		// 	// If lowest difference, record the friend match
			if (diff < totalDifference) {
				
				totalDifference = diff;
				// console.log("totalDifference " + totalDifference)
				// console.log("Diff " + diff);
				friendMatch.name = friends[i].name;
				friendMatch.photo = friends[i].photo;

			}
				
		}

	 	// Add new user to server instances when server is restarted the new user is not added to friends.js
		friends.push(userInput);
		
		res.json(friendMatch);
				
				 
	});
	
// console log statements are commented out currently. Can be uncommented for troubleshooting purposes.
 

module.exports = router;