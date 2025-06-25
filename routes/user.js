const express= require("express");
const{handlepostreq,goToWebsite,totalclicks,}=require('../controllers/user')

const router=express.Router();

router
.route("/")
.post(handlepostreq);

router.get("/:shortID",goToWebsite);

router.get("/analytics/:shortID",totalclicks);

module.exports= router;