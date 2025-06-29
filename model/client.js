const mongoose=require('mongoose');

const clientSchema=  mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        uniqur:true,
     },
     password:{
        type:String,
        required:true,
     } ,
    

},

{timestamps:true},
)

const client = mongoose.model("client",clientSchema);
module.exports= client;