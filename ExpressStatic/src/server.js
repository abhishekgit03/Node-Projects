const express = require('express');
const app=express();
const path= require("path");
staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("Hello");
});
app.get("/about",(req,res)=>{
    res.send("Welcome to the about page");
});
app.get("/contact",(req,res)=>{
    res.send("Welcome to the contact page");
});
app.listen(8000, ()=>
{
    console.log("Server is running on port 8000");
});
