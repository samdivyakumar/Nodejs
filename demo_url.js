var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host); //returns the localhost
console.log(q.pathname); // returns /default.html
console.log(q.search); // returns year=2017&month=february

var qdata = q.query;
console.log(qdata.year);