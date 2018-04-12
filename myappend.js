var fs = require('fs');

fs.appendFile('myowntxtfile.txt', 'How are you',function(err) {
	if(err) throw err;
	console.log('text appended!');
});