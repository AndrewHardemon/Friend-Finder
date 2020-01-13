//Get route '/api/friends' display json of all possible friends
//POST routes '/api/friends' that will handle incoming survey results
//also used to handle the compatibility logic

app.get("/api/friends", function(req, res) {
  return res.json(characters);
});

app.post("app/data/friends.js", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});