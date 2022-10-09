//The http.createServer method includes a request and a response parameter
//The response object can be used to get information about the url, request header and data
// The response object can be used to send data back to the client

const web=require('http'); //import the http module
const server=web.createServer((req,res)=> { 
   if(req.url=="/")
        res.end("Hello from localhost:8000 Home Page");
    else if(req.url=="/about")
        res.end("Hello from localhost:8000 About Page");
    else
    {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("Hello from localhost:8000 404 Page");
    }
});

server.listen(8000,"127.0.0.1", () => {
console.log("Server is listening on port 8000");
});

