//Dependencies
//=====================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Declare global variables and bodyparser methods to handle incoming data
//=====================================
var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Create variables to store user data
//=====================================
var reservations = [];
var waitList = [];

//Routing
//=====================================

//setting the root path equal to index.html file
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reserve", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/reserve", function(req, res) {
  var newReservation = req.body;
  reservations.push(newReservation);
  res.json(reservations);
  console.log(reservations);
});

app.post("/api/waitlist", function(req,res) {
  var newWaitList = req.body;
  waitList.push(newWaitList);
  res.json(waitList);
  console.log("Wait-list: " + waitList);
});

//initialize server to listen to PORT
app.listen(PORT, function() {
  console.log("Now listening to port: " + PORT);
});
