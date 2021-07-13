const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: { type: String, required: true},
    userName: { type: String, require: true },
    // location: { type: String, required: true },
    title: {type: String, required: true},
    description: { type: String, required: true},
    Image64: { type: String, required: true },
    date: { type: Date, default: Date.now },
    // event: Boolean
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;