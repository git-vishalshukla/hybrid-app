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
				db.close();
			  });
			  
			  // INSERT RECORDS
			  var customerData = [{"name":"Rhonda","address":"810-3730 Nec Street"},{"name":"Kaitlin","address":"P.O. Box 613, 8652 Aliquet. Avenue"},{"name":"Calvin","address":"522-609 Amet Street"},{"name":"Byron","address":"691-4696 Et Avenue"},{"name":"Allegra","address":"Ap #584-1163 Erat St."},{"name":"Kieran","address":"P.O. Box 424, 4056 Adipiscing Rd."},{"name":"Germaine","address":"P.O. Box 880, 1669 Non Rd."},{"name":"Florence","address":"360-748 Mauris. Ave"},{"name":"Ariana","address":"P.O. Box 369, 5140 Vitae St."},{"name":"Shafira","address":"Ap #206-3631 Ut St."},{"name":"Ocean","address":"P.O. Box 732, 8974 Blandit St."},{"name":"Vera","address":"1787 Nec St."},{"name":"Rogan","address":"Ap #797-3987 Vel Rd."},{"name":"Cade","address":"Ap #890-1676 Cras St."},{"name":"Imogene","address":"770 Amet Ave"},{"name":"Raven","address":"3349 Blandit Rd."},{"name":"Hector","address":"Ap #750-8228 Ipsum. Rd."},{"name":"Nadine","address":"P.O. Box 926, 6150 A, Av."},{"name":"Brendan","address":"184-1373 Dictum St."},{"name":"Kieran","address":"628-5141 Etiam Av."},{"name":"Josephine","address":"Ap #332-5502 Magna. Street"},{"name":"Dacey","address":"7412 Integer Road"},{"name":"Halee","address":"P.O. Box 216, 4772 Molestie. Avenue"},{"name":"Cally","address":"249 Non St."},{"name":"Dieter","address":"P.O. Box 489, 2829 Sem St."},{"name":"Aladdin","address":"2253 At St."},{"name":"Philip","address":"420-9184 Sagittis. St."},{"name":"Fredericka","address":"9381 Elit. Road"},{"name":"Tasha","address":"Ap #160-4220 Natoque Avenue"},{"name":"Denton","address":"543-5722 Proin Road"},{"name":"Rina","address":"P.O. Box 560, 8613 Luctus Avenue"},{"name":"Lev","address":"3484 In, Rd."},{"name":"Sydney","address":"4047 Arcu. Street"},{"name":"Christopher","address":"P.O. Box 220, 3873 Vulputate Avenue"},{"name":"Tobias","address":"Ap #790-1148 Ultrices. Av."},{"name":"Bert","address":"291-2319 Congue, Street"},{"name":"Kevin","address":"P.O. Box 133, 1878 Libero. Street"},{"name":"Joshua","address":"7004 Sed, Ave"},{"name":"Rooney","address":"Ap #770-7837 Et, Road"},{"name":"Kennan","address":"6754 At St."},{"name":"Maggie","address":"Ap #888-7151 Sem Street"},{"name":"Montana","address":"516-4288 Interdum Avenue"},{"name":"Maryam","address":"6724 Dictum Avenue"},{"name":"Sara","address":"997-2956 Mi Street"},{"name":"Herrod","address":"Ap #551-4734 Suspendisse St."},{"name":"Willa","address":"P.O. Box 892, 9817 Cras Ave"},{"name":"Bradley","address":"888-5932 Nam St."},{"name":"Samuel","address":"P.O. Box 138, 281 Amet, Road"},{"name":"Philip","address":"P.O. Box 400, 6108 Metus Rd."},{"name":"Zachery","address":"P.O. Box 739, 3166 Pharetra. St."},{"name":"Hammett","address":"726-2567 Leo. Street"},{"name":"Dara","address":"1976 Mauris Street"},{"name":"Jin","address":"2891 Ultricies St."},{"name":"Alfonso","address":"Ap #440-5530 Varius Road"},{"name":"Pearl","address":"7170 Nam Avenue"},{"name":"Carla","address":"787-1225 Tellus Ave"},{"name":"Tyrone","address":"P.O. Box 228, 2102 Sed Av."},{"name":"May","address":"707-3629 Aenean St."},{"name":"Lionel","address":"901-5750 Velit Street"},{"name":"Yvonne","address":"P.O. Box 131, 4996 At St."},{"name":"Jocelyn","address":"978-7572 Tortor, St."},{"name":"Hannah","address":"1581 Bibendum Rd."},{"name":"Bruce","address":"626-6022 Faucibus St."},{"name":"Dorian","address":"9944 Arcu. St."},{"name":"Skyler","address":"9393 Cursus. Road"},{"name":"Marsden","address":"Ap #897-9329 Sem Street"},{"name":"Noelle","address":"529-2766 Tellus Rd."},{"name":"Judah","address":"584-8071 Sit Ave"},{"name":"Noelani","address":"415-7425 Ligula Avenue"},{"name":"Sonia","address":"P.O. Box 606, 5613 Malesuada Avenue"},{"name":"Ruth","address":"P.O. Box 271, 8048 Nonummy Road"},{"name":"Dorian","address":"472-9768 Aliquam Road"},{"name":"Malachi","address":"P.O. Box 769, 4724 Eu St."},{"name":"Ruth","address":"880-4892 Egestas St."},{"name":"Fay","address":"P.O. Box 586, 8147 Est Avenue"},{"name":"Jena","address":"3859 Leo. Ave"},{"name":"Illana","address":"156-9026 Nunc Road"},{"name":"Allistair","address":"P.O. Box 575, 1719 Eu Rd."},{"name":"Roanna","address":"P.O. Box 870, 6239 Enim. St."},{"name":"Montana","address":"P.O. Box 667, 2131 Erat Av."},{"name":"Jason","address":"839-538 Quisque Avenue"},{"name":"Cedric","address":"750-347 Dictum St."},{"name":"Lucian","address":"P.O. Box 252, 648 Ipsum Avenue"},{"name":"Benjamin","address":"452-8632 Posuere Rd."},{"name":"Lev","address":"P.O. Box 655, 1280 Ipsum St."},{"name":"Jack","address":"Ap #783-8776 Nunc Street"},{"name":"Thaddeus","address":"2259 Euismod Street"},{"name":"Graham","address":"3956 Nec Road"},{"name":"Erich","address":"P.O. Box 172, 3818 Ornare. St."},{"name":"Ferdinand","address":"545-4180 Nec St."},{"name":"Amir","address":"4529 Lobortis St."},{"name":"Sacha","address":"9289 At, Av."},{"name":"Barry","address":"176-4660 Volutpat. Av."},{"name":"Maxwell","address":"P.O. Box 835, 245 Sociosqu Avenue"},{"name":"Eagan","address":"430-8154 Proin St."},{"name":"Grant","address":"4170 Interdum. Rd."},{"name":"Zenaida","address":"Ap #308-3252 Eget St."},{"name":"Gwendolyn","address":"3467 Sit Avenue"},{"name":"Arsenio","address":"844-9548 Pretium Rd."},{"name":"Lyle","address":"7420 Neque. Road"}];
			  dbo.collection("customers").insert(customerData, function(err, result) {
				if (err) throw err;
				res.write("<br><br>1 document inserted<br>");
				db.close();
				return res.end();
			  });
			  
			});
	}
	
	//return res.end();
}).listen(8081);