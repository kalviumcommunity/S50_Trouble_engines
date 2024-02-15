const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    carName: { type: String, required: true },
    carImage: { type: String },
    company: { type: String },
    engineIssue: { type: String },
    engineType: { type: String },
    likes: { type: Number, default: 0 }
});

const post = mongoose.model('Post', postSchema)

module.exports = post;