const express = require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send(`<h1 style="color: blue;">Hello from localhost:8000 Home Page</h1>
              <h2 style="font-style: italic;">This is a simple express server</h2>`);
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
