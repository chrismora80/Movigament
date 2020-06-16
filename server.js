const express = require("express");

const PORT = process.env.PORT || 8080;

// Creates express app
const app = express();

app.use(express.static("public"));

// Returns JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes for server
var routes = require("./controllers/burgers_controller.js");
// Use Routes
app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});