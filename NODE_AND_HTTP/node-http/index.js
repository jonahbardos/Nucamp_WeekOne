const http = require('http');
const fs = require('fs'); //lets you read and write
const path = require('path'); //allows you to specifiy a path in your localsystem
const hostname = 'localhost';
const port = 3000;

//
//takes a function as a parameter
const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/')
        {
          fileUrl = '/index.html';
        } 
      else
        {
          fileUrl = req.url;
        } 
        //Full path for the file
      var filePath = path.resolve('./public'+fileUrl);

      // This examines the file
      const fileExt = path.extname(filePath);
      if (fileExt == '.html') {
          //Lets see if this file exists with a return callback function
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
            //READ FILE TO FILEPATH AND CONVER TO STREAM OF BYTES AND INCLUDE IN BODY OF RESPONSE
          fs.createReadStream(filePath).pipe(res);
        });
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
      }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  });

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});