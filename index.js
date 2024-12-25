const express = require("express");
const urlRoute=require('./routes/user');
const {connectMongo} =require("./connect");

const app = express();



connectMongo("mongodb://localhost:27017/short-url").then(()=>{console.log("mongodb successfully connected")});

const port =8561;

app.use(express.json());
app.use("/url",urlRoute);

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is active and listening on port ${port}`);
    }
});




