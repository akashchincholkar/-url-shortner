const shortid = require('shortid');
const USer = require('../model/user');


async function handlepostreq(req, res) {
   const body = req.body;
   console.log(body);
   if (!body.ogLink) return res.status(404).json("wtf is happening");

   const shortID = shortid();
   await USer.create({
      shortLink: shortID,
      ogLink: body.ogLink,

   })
   return res.json({ id: shortID });

}

async function dummyreq(req, res) {
   const result = await USer.find();
   return res.json(result);
}

async function goToWebsite(req,res){
   const shortid = req.params.shortID
   console.log(shortid);
   const user = await USer.findOneAndUpdate({ shortLink: shortid },{
      $push:{
         visitHistory:{
            timestamp:Date.now()}
      }
   });
   
   return res.redirect(user.ogLink);
}
async function totalclicks(req,res){
  const shortid = req.params.shortID;
   const user = await USer.findOne({ shortLink: shortid })
   console.log(user);
   return res.json({totalclicks:user.visitHistory.length,
      analytics:user
   });
}

module.exports = {
   handlepostreq, dummyreq,goToWebsite,totalclicks,
};