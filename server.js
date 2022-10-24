// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");
   response.write("<h3> Dustin Edgerton - N78C541</h3> \
   <p> Running node server on port 3041</p>");  
   response.end();
}).listen(3041);