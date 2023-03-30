const mongoose=require("mongoose");

const followschema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    followerid:{
        type:string
    }
})

const follomodel=mongoose.model('follow',followschema);
module.exports=follomodel;