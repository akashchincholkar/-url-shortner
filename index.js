const express = require("express");
const urlRoute=require('./routes/user');
const {connectMongo} =require("./connect");
const path = require("path");
const staticRoute=require("./routes/staticrouter");
const clientRoute=require("./routes/client");
const cookieParser = require("cookie-parser");
const {checkAuth,justAuthCheck,} = require("./middleware/checkauth");

require("dotenv").config();
const app = express();



connectMongo(process.env.MONGO_URI).then(()=>{console.log("mongodb successfully connected")});

const port =8561;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/url",checkAuth,urlRoute);
app.use("/",clientRoute);
app.use("/",justAuthCheck,staticRoute);




app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is active and listening on port ${port}`);
    }
});




