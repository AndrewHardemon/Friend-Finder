//Get route '/api/friends' display json of all possible friends
//POST routes '/api/friends' that will handle incoming survey results
//also used to handle the compatibility logic

//var connection = require("../data/friends.js");
var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req.body)
    friends.push(req.body);
    res.json(friends)
  });

}