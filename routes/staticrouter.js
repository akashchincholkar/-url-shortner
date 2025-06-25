const express= require("express");
const USer = require('../model/user');

const router=express.Router();

router.get("/", async (req, res) => {
    try {
      if(!req.client){return res.redirect("login");}
      const allUrls = await USer.find({createdBy: req.client._id}).sort({createdAt: -1});
      res.render("home", {
        urls: allUrls,
      });
    } catch (err) {
      console.error("Error fetching URLs:", err);
      res.status(500).send("An error occurred while fetching URLs.");
    }
  });
  




module.exports=router;