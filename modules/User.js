const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        tyep: String
    },
    password:{
        type: String,
        minlength: 5
    },
    lastnaem:{
        type: String,
        maxlength:50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('user',userSchema)

module.exports = {User}