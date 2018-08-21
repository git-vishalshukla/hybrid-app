var fs = require('fs');
exports.readFile = function(res,filename){
	fs.readFile(filename, function(err, data) {
		res.write(data);
		res.end();
	});
}
exports.appendFile = function(res,filename,content){
	
	//fd = fs.openSync(filename, 'a');
	//fs.appendFileSync(fd, 'data to append', 'utf8');
	fs.appendFile(filename, "data to append\n", function (err) {
	  if (err) throw err;
	  console.log('Appended!');
	});
}
exports.writeFile = function(res,filename,content){
	fs.writeFile(filename, content, function (err) {
	  if (err) throw err;
	  console.log('Written!');
	});
}
exports.deleteFile = function(res,filename){
	fs.unlink(filename, function (err) {
		if (err) throw err;
		console.log('File deleted!');
	});
}


