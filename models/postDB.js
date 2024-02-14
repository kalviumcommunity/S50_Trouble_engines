const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    "User_Name" : String,
    "Car_Name" : String,
    "Car_Image" : String,
    "Company" : String,
    "Engine Issue" : String,
    "Engine Type" : String,
    "Likes" : String
})

module.exports = postSchema;