
const{getClient}=require('../service/auth');

async function checkAuth(req, res, next) {
    const sessionId = req.cookies?.sessionId;
   
    if (!sessionId) {
        return res.redirect("/login");
    }
    
    const client = getClient(sessionId);
  
    if (!client) {
        return res.redirect("/login");
    }
    
    req.client = client; // Attach the client to the request object
    next();
}
async function justAuthCheck(req, res, next) {
    const sessionId = req.cookies?.sessionId; 
    if (!sessionId) {
        return res.redirect("/login");// If no sessionId, just continue to the next middleware
    }
    const client = getClient(sessionId);
    req.client = client; 
    next();
}



module.exports = {
    checkAuth,justAuthCheck,
};