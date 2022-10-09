const express=require("express");
const https=require("https");

const app=express();
app.get("/",function(req,res){
const url="https://api.chucknorris.io/jokes/random";

https.get(url, function(response){   
    response.on("data",function(data){
        const jokeJSON=JSON.parse(data);
        console.log(jokeJSON.value);
        res.write(jokeJSON.value);
        res.send();
    });
    
});
});

app.listen(8000,()=>
{
    console.log("server running");
});
