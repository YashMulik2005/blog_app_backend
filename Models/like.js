const mongoose=require("mongoose");

const likeschema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    postid:{
        type:string,
        required:true
    }
})

const likemodel=mongoose.model('follow',likeschema);
module.exports=likemodel;