var fs = require('fs');
var path = require('path');
var extension = '.'+process.argv[3];

fs.readdir(process.argv[2], function(err, file) {
	if(err) return console.error(err);
	for(var i=0; i<file.length; i++) {
		if(path.extname(file[i]) === extension) {
			console.log(file[i]);
		}
	}
});