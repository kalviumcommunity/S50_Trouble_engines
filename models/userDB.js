const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    "userName" : String,
    "name" : String,
    "email" : String,
    "country" : String,
    "password" : String
})

const user = mongoose.model('User', userSchema)

module.exports = user;
