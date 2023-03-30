const mongoose=require("mongoose");

const blogschema=new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    }
    
    ,description:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }

})

const blogmodel=mongoose.model('Blog',blogschema);
module.exports=blogmodel;