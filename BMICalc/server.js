const express=require('express');
const bodyparser=require('body-parser');
app=express();
app.use(bodyparser.urlencoded({extended: true}))
app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post('/',(req,res)=>{
    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    var bmi=w/(h*h);
    res.send(`Your BMI = ${bmi.toString()}`);
});

app.listen(8000);