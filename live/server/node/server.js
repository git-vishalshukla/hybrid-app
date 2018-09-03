var express = require('express');
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

app.get('/listProducts', function (req, res) {

  con.query("SELECT * FROM demo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.end(JSON.stringify(result));
  });

})

/*app.post('/createProduct', function (req, res) {

  con.query("Inset into FROM demo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.end(JSON.stringify(result));
  });

})*/

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})