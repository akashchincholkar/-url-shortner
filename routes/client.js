const express= require("express");

const router=express.Router();
const {handleSignup,getSignUp,handleLogin,getLogin}=require('../controllers/client');

router.get("/signup",getSignUp);
router.post("/signup",handleSignup);
router.get("/login",getLogin);
router.post("/login",handleLogin);


module.exports=router;