var mdl = require('./firstModule');

mdl(process.argv[2], process.argv[3], function(myList, myExtend) {
	console.log("QUEL CALLBACK", myList, myExtend);
});
