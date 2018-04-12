var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	var myobj = [
	{_id: 120, name: 'Chocolate Heaven'},
	{_id: 121, name: 'Tasty lemon'},
	{_id: 122, name: 'Vanilla dream'}
	];
	db.collection("products").insertMany(myobj, function(err,res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});