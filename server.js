const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require('cors')

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(cors({
  origin : "http://localhost:3000",
  credentials: true,
}))
app.use(session(sess));

app.use(session({ secret: "Super secret secret" }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
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
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});