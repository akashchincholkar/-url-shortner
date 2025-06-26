const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
ogLink:{ 
    type:String,
    required:true,
    

},
shortLink:{
       type:String,
       required:true,
         unique:true,
       
},

    visitHistory:[{
        timestamp:{type:Number},
    }],
     createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"clients",}
}, 
{timestamps:true},
  


)

const user=mongoose.model("user",userSchema);
module.exports= user;