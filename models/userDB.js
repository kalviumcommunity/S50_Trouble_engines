const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    "userName" : String,
    "name" : String,
    "img" : String,
    "email" : String,
    "password" : String
})

const user = mongoose.model('User', userSchema)

module.exports = user;
