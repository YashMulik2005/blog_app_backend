const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

    , password: {
        type: String,
        required: true
    },
    name:{
        type:String
    }
   
})

const usermodel = mongoose.model('User', userschema);
module.exports = usermodel;