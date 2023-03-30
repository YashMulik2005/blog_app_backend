const mongoose=require("mongoose");

const commentschema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    text:{
        type:string,
        required:true
    },
    postid:{
        type:string,
        required:true
    }
})

const commentmodel=mongoose.model('follow',commentschema);
module.exports=commentmodel;