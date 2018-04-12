var fs = require('fs');

//first argument will be filename,second argument the content need to be written in the file,third argument will be function to write error 
//

fs.writeFile('mynewfile3.t','Hello Divya',function(err){
	if(err) throw err;
	console.log('saved!');
});