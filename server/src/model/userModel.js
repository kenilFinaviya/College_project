const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
})

const user = mongoose.model("user",userSchema)

module.exports = user