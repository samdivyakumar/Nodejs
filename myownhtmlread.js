var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('demofile1.html',function(err,data){
		res.writeHead(200, {'Content-Type':'text/html'});         //first arugment is 200 to confirm that it is ok, 2nd content type
		res.write(data);
		res.end();
	});
}).listen(8080);