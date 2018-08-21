// http://localhost:8080/TEST?year=2018&month=07
var http = require('http');
var commentHeader = require("./comment-header");
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			
			/*==================================================*/
			/* Show Date
			/*==================================================*/
			commentHeader.showComment(res,"Show Date");
			var dt = require('./date');	
			res.write("Now: " + dt.currentDate());
			
			/*==================================================*/
			/* URL and Query Parameters
			/*==================================================*/
			commentHeader.showComment(res,"URL and Query Parameters");
			var url = require('url');	
			var reqUrl = url.parse(req.url, true);
			var q = reqUrl.query;
			res.write("URL: " + req.url + "<br>Year/Month: " + q.year + "/" + q.month);
			res.write("<br><br>HOST: " + reqUrl.host + "<br>Path: " + reqUrl.pathname + "<br>Search: " + reqUrl.search);
			

			/*==================================================*/
			/* File System
			/*==================================================*/
			//commentHeader.showComment(res,"File System");
			//var fileSystem = require('./files');
			
			// (READ)
			//fileSystem.readFile(res,"readfile.html");

			//(APPEND)
			//fileSystem.appendFile(res,"appendfile.html","\n<br># Point "+Math.random());
			
			//(WRITE)
			//fileSystem.writeFile(res,"appendfile.html","\n<br># Point 1<br># Point 2");
			
			//(DELETE)
			//fileSystem.deleteFile(res,"delete.html");
			
			
			
			/*==================================================*/
			/* Send an Email
			/*==================================================*/
			/*
			commentHeader.showComment(res,"Send an Email");
			var emailer = require('./email');
			var mailOptions = {
			  from: 'vishal.shukla@viitorcloud.com',
			  to: 'vishal.shukla@viitorcloud.com',
			  subject: 'difficult Email',
			  text: 'That was difficult!!!!',
			  html: "<h1>Welcome</h1><p>That was easy!</p>"
			};

			emailer.c(mailOptions);*/
			
			/*==================================================*/
			/* Events
			/*==================================================*/
			commentHeader.showComment(res,"Events");
			var events = require('events');
			var eventEmitter = new events.EventEmitter();

			var myEventHandler = function () {
			  res.write("I hear a scream!");
			}

			eventEmitter.on('scream', myEventHandler);
			eventEmitter.emit('scream');
			
			
			/*==================================================*/
			/* File Upload
			/*==================================================*/
			commentHeader.showComment(res,"File Upload");
			res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
			res.write('<input type="file" name="filetoupload"><br>');
			res.write('<input type="submit">');
			res.write('</form>');
			
			var formidable = require('formidable');
			console.log(req.url);
			if (req.url == '/fileupload') {
				var form = new formidable.IncomingForm();
				form.parse(req, function (err, fields, files) {
						console.log(files.filetoupload.path,files.filetoupload.name);
						var oldpath = files.filetoupload.path;
						var newpath = 'D:/mobile-poc/node/' + files.filetoupload.name;
						
						fs.readFile(oldpath, function (err, data) {
							if (err) throw err;
							console.log('File read!');

							// Write the file
							fs.writeFile(newpath, data, function (err) {
								if (err) throw err;
								res.write('File uploaded and moved!');
								//res.end();
								console.log('File written!');
							});

							// Delete the file
							/*fs.unlink(oldpath, function (err) {
								if (err) throw err;
								console.log('File deleted!');
							});*/
						});
						
						
						
						/*fs.rename(oldpath, newpath, function (err) {
						if (err) throw err;
							res.write('File uploaded and moved!');
							res.end();
						});	*/
						//res.write('File uploaded');
						//res.end();
				});
			}
			
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
			  
			  // INSERT RECORDS
			  /*var customerData = { name: "TEST", address: "Highway 36" };
			  dbo.collection("customers").insertOne(customerData, function(err, result) {
				if (err) throw err;
				res.write("<br><br>1 document inserted<br>");
				db.close();
			  });*/
			  
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
				db.close();
				//setTimeout(function(){
					return res.end();
				//},3000);
				
			  });
			  
			  // SORT Data
			  /*var mysort = { address: 1 };
			  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
				if (err) throw err;
				res.write("<br><br><table><tr><th>Name</th><th>Address</th></tr>");
				for(var sortIndex = 0;sortIndex < result.length;sortIndex++)
					res.write("<tr><td>"+result[sortIndex].name+"</td><td>"+result[sortIndex].address+"</td></tr>");
				//res.write("<br><br>REGULAR EXPRESSION > <br>"+JSON.stringify(result));
				db.close();
				res.write("</table>");
				return res.end();
			  });*/
			});
	}
	
	//return res.end();
}).listen(8080);