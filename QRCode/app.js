const express=require('express');
const app=express();
const bp=require("body-parser");
const qr=require("qrcode");
const port=5000;

app.set("view engine","ejs");
app.use(bp.urlencoded({extended: false}));
app.get("/",(req,res)=>
{
    res.render("index");
});
app.post("/scan",(req,res)=>
{
    let url=[ req.body.name,req.body.date, req.body.lat, req.body.log];
    if(url.length===0) 
    res.send("Empty Data!");
    qr.toDataURL(url,(err,src) =>{
        if(err) res.send("Error occured");
        res.render("scan",{src})
    });
});

app.listen (port,()=>
{
  console.log(`Server is running at port ${port}`)
});

