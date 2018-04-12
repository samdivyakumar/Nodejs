var myfs = require('fs');

myfs.writeFile('myowntxtfile.txt','Hey divya',function(err) {
	if(err) throw err;
	console.log('check your the myowntxtfile');
});