"use strict";

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Allows access to HTML & CSS files from 'public folder' and also creates a path to the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle the home page
app.get("/", (req, res) => {
  res.send("Hello There, from Express Server");
});

// Starts the server
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
