const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, require: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  Image64: { type: String, required: true },
  likes: { type: Number },
  date: { type: Date, default: Date.now },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;