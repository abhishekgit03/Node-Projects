const fs=require("fs");

const biodata=
{
    name: "Abhishek",
    age: 19,
    stream: "CSE",
    year: "2nd year",
    grade:"A"
};
const jsondata=JSON.stringify(biodata);
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("Written to json1.json");
 });

fs.readFile("json1.json","utf-8",(err,data)=>{
    const parsedData=JSON.parse(data);
    console.log(parsedData);
});
