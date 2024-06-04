const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testproject");

let postschema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    content:String,
    likes:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"user"}
    ]
    
})

module.exports=mongoose.model("post",postschema);
