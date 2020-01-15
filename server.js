var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing files
require("../routing/apiRoutes")(app);
require("../routing/htmlRoutes")(app);

function friendNum() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/friends", method: "GET" })
    .then(function(friends) {

      // Here we then log the tableData to console, where it will show up as an object.
      console.log(friends);

      // * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
      //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
      //      * Example:
      //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
      //        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
      //        * Total Difference: **2 + 1 + 2 =** **_5_**
      //    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
      //    * The closest match will be the user with the least amount of difference.

      // 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
      //    * The modal should display both the name and picture of the closest match.

    });
}

//Run the comparison
friendNum();

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});