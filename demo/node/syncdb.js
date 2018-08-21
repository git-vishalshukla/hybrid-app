// http://localhost:8080/TEST?year=2018&month=07
var http = require('http');
var commentHeader = require("./comment-header");
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			
			/*==================================================*/
			/* Mongo DB
			/*==================================================*/
			commentHeader.showComment(res,"Mongo DB");
			var MongoClient = require('mongodb').MongoClient;
			var url = "mongodb://localhost:27017/sample";

			// CONNECT DB
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  console.log("Database created!");
			  var dbo = db.db("sample");
			  
			  // CREATE/SELECT TABLE
			  dbo.createCollection("customers", function(err, result) {
				if (err) throw err;
				res.write("<br><br>Collection created!<br>");
				//db.close();
			  });
			  
			  // FIND FIRST RECORD
			  dbo.collection("customers").findOne({}, function(err, result) {
				if (err) throw err;
				res.write("<br><br>FIRST RECORD > <br>"+JSON.stringify(result));
				//db.close();
			  });
			  
			  // DELETE RECORDS
			  /*var myquery = { address: /^[A-Z]/ };
			  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
				if (err) throw err;
				console.log(obj.result.n + " document(s) deleted");
				db.close();
			  });*/

			  // FIND ALL RECORDS
			  dbo.collection("customers").find({}, { _id: 0, name: 0 }).toArray(function(err, result) {
				if (err) throw err;
				res.write("<br><br>ALL RECORD > <br>"+JSON.stringify(result));
				//db.close();
			  });
			  
			  // FILTER SPECIFIC RECORD
			  var query = { address: "Highway 37" };
			  dbo.collection("customers").find(query).toArray(function(err, result) {
				if (err) throw err;
				res.write("<br><br>SPECIFIC RECORD > <br>"+JSON.stringify(result));
				//db.close();
			  });
			  
			  // FILTER SPECIFIC RECORD BY PATTERN
			  var query = { address: /36$/ };
			  dbo.collection("customers").find(query).toArray(function(err, result) {
				if (err) throw err;
				res.write("REGULAR EXPRESSION > <br>"+JSON.stringify(result));
				//db.close();
				//setTimeout(function(){
					//return res.end();
				//},3000);
				
			  });
			  
			  // SORT Data
			  var mysort = { name: 1 };
			  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
				if (err) throw err;
				res.write("<br><br><table><tr><th>Name</th><th>Address</th></tr>");
				for(var sortIndex = 0;sortIndex < result.length;sortIndex++)
					res.write("<tr><td>"+result[sortIndex].name+"</td><td>"+result[sortIndex].address+"</td></tr>");
				//res.write("<br><br>REGULAR EXPRESSION > <br>"+JSON.stringify(result));
				//db.close();
				res.write("</table>");
				//return res.end();			
			  });
			});
	}
	return;
	
}).listen(8080);