var http = require('http');

//implement a serverCallback function

function serverCallback(req ,res){
  //head of the message...necessary fory the http protocol
  //has two parameters -> 1.code of the msg 2.typeof the message

  res.writeHead(200 ,{'Content-Type' : 'text/plain'});
  //argv -0 is node's binary itself and argv -2 is the name of the script(udemy.js)
  res.end('Hello World' + process.argv[2]);

}

http.createServer(serverCallback).listen(8080);

//console.log("Hello world")
