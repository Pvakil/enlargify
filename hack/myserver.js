var http = require('http');
var url = require('url');
var fs = require('fs'); //allow file system access (read and write to files)
var express = require('express')
var app = express()

//create a server object:
http.createServer(function (req, res) { 
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  //Read the html file
  fs.readFile(filename, function(err, data) {
      //if html file isn't found or doesn't work
      if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end(); //end the response
  });
}).listen(8080); //the server object listens on port 8080 

app.use(express.static('../client/', {index: 'lobby.html'}))
