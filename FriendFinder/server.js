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

function runTableQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/friends", method: "GET" })
    .then(function(tableData) {

      // Here we then log the tableData to console, where it will show up as an object.
      console.log(tableData);
      console.log("------------------------------------");

      // Loop through and display each of the customers
      for (var i = 0; i < tableData.length; i++) {

        // Get a reference to the tableList element and populate it with tables
        var tableList = $("#tableList");

        // Then display the fields in the HTML (Section Name, Date, URL)
        var listItem = $("<li class='list-group-item mt-4'>");

        listItem.append(
          $("<h2>").text("Table #" + (i + 1)),
          $("<hr>"),
          $("<h2>").text("ID: " + tableData[i].customerID),
          $("<h2>").text("Name: " + tableData[i].customerName),
          $("<h2>").text("Email: " + tableData[i].customerEmail),
          $("<h2>").text("Phone: " + tableData[i].phoneNumber)
        );

        tableList.append(listItem);
      }
    });
}

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});