var fs = require('fs');
var path = require('path');

function filtered(dir, extend, cb) {
	fs.readdir(dir, function callback(err, list) {
		cb(list,extend);
	})
}

module.exports = filtered;