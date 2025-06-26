const client=require('../model/client');
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
const {SetClient}=require('../service/auth');

async function handleSignup(req,res){
const{email,password,name}=req.body;
if(!email || !password || !name){
    return res.status(400).json("Please fill all the fields");
}
await client.create({
    name:name,
    email:email,
    password:password,
    
})

return res.redirect("/login");

}
async function getSignUp(req,res){
    return res.render("signup");
}

async function handleLogin(req,res){
    const{email,password}=req.body;
    if(!email || !password){
        return res.status(400).json("input all the fields");

    }
    const user=await client.findOne({email,password})
    if(!user){
       return  res.render("login", { error: "Invalid email or password" });
    }
    const sessionId = uuidv4();
    if (!sessionId) {
          return res.redirect("/login");
    }
    SetClient(sessionId, user);
    res.cookie("sessionId", sessionId, )

  return res.redirect("/");
};
async function getLogin(req,res){
    console.log("login");
   
    return res.render("login");
}

module.exports={handleSignup,getSignUp,handleLogin,getLogin,};
