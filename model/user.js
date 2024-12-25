const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
ogLink:{ 
    type:String,
    required:true,
    unique:true,

},
shortLink:{
       type:String,
       required:true,
},

    visitHistory:[{
        timestamp:{type:Number},
    }],
},
{timestamps:true},


)

const user=mongoose.model("user",userSchema);
module.exports= user;