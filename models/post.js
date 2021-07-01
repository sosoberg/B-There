const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: String, required: true },
    location: { type: String, required: true },
    description: {String},
    // image: {type: Image},
    date: { type: Date, default: Date.now },
    event: Boolean
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;