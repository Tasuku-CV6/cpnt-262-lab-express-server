"use strict";

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Allows access to HTML & CSS files from 'public folder' and also creates a path to the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to handle the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Serve 404 page for any other route, basically route to handle the 404 page
app.get("*", (req, res) => {
  console.log("404 route triggered");
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Starts the server
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
