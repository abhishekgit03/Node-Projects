const fs=require('fs');
const http= require('http');

const server=http.createServer();

server.on("request", (req,res) =>{
    const rstream=fs.createReadStream('file1.txt');
    
    rstream.on('data',(chunk)=>{
        res.write(chunk);
    });

    rstream.on('end',()=>{
        res.end();
    });
        
    rstream.on('error',(err)=>{
        console.log(err);
         res.end("File not found");
    });        
    
});

server.listen(8000,"127.0.0.1");