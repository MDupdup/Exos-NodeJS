var fs = require('fs');
var path = require('path');

function filtered(dir, extend, cb) {
	var resultat = [];
	fs.readdir (dir, function (err,list){
		if (err) { return cb(err)};
		for (var i=0; i<list.length; i++){
			if (path.extname(list[i]) === '.'+extend){
				resultat.push(list[i]);
			}
		}
		cb(null,resultat);
	})
}

module.exports = filtered;