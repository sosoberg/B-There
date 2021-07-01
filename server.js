const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
//Conect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seattleLocationDB");

// Send every other request to the React app

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});