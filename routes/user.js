const express= require("express");
const{handlepostreq,dummyreq,goToWebsite,totalclicks}=require('../controllers/user')

const router=express.Router();

router
.route("/")
.post(handlepostreq)
.get(dummyreq);

router.get("/:shortID",goToWebsite);

router.get("/analytics/:shortID",totalclicks);

module.exports= router;