var http = require('http');
var request = require('ajax-request');
http.createServer(function (req, res) {
	request({
	  url: 'http://localhost:8083',
	  method: 'GET',
	  data: {}
	}, function(err, result, body) {
	  console.log(err);
	  return res.end();
	});
}).listen(8082);