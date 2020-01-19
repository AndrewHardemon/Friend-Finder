

var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"))

//Routing files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// <reference path="app/data/survey.html" />
// document.writeln('<script src="/javascripts/jquery.js" type="text/javascript"></sc'+'ript>');
// document.writeln('<script type="text/javascript" src="/javascripts/jquery.tablesorter.js"></sc'+'ript>');



// function friendNum() {
//   // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//   $.get("/api/friends", function(friends){
//     console.log("friends")

//     var compare = [];
//     var bestFriend = 100;
//     var frenNum = 0;

//     //Compare each friend to newest entry with all their values
//     for(i = 0; i < friends.length-1; i++){
//       for(j = 0; j < 10; j++){
//         compare[i] += Math.abs(friends[i].scores[j] - friends[friends.length-1].scores[j]);
//       }
//     }

//     //Figure out which friend has the lowest number compared to you
//     for(i = 0; i < compare.length; i++){
//       if(compare[i] < bestFriend){
//         bestFriend = compare[i];
//         frenNum = i;
//       }
//     }

//     alert(friends[frenNum].name + "is your closest match")
//   })
// }

//Run the comparison
//export function friendNum();
//module.exports = {func: friendNum()}

app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});