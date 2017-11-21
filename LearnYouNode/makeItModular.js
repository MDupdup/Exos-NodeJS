var mdl = require('./firstModule');

mdl(process.argv[2], process.argv[3], function(err, list) {
	if(err) console.error(err);
	list.forEach(function(item) {
		console.log(item)
	});
});
