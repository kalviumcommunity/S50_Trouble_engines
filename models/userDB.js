const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    "User_Name" : String,
    "Name" : String,
    "Email" : String,
    "Country" : String,
    "Password" : String
})

const user = mongoose.model('User', userSchema)

module.exports = user;
