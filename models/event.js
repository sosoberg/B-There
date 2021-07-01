const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  user: { type: String, required: true },
  location: { type: String, required: true },
  description: {String},
  // image: {type: Image},
  date: { type: Date, default: Date.now },
  event: Boolean
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;