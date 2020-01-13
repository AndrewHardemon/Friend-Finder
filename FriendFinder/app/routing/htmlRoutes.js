// GET route to '/survey' to display survey page
// default route to home.html to display home page
var path = require("../../server.js");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});