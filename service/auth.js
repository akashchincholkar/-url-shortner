const SessionToClient=new Map();


function SetClient(sessionID,user){
    if(!sessionID || !user){
        throw new Error("Session ID and user are required");
    }
    SessionToClient.set(sessionID,user);
}

function getClient(sessionID){
    if(!sessionID){
        throw new Error("Session ID is required");
    }
    return SessionToClient.get(sessionID);
}   

module.exports={
    SetClient,
    getClient,
};