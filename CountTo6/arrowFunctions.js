var inputs = process.argv.slice(2);
var result = inputs.map(function(str) {return str.substr(0,1);})
					.reduce(function(a,b){return a+b;});

console.log(`[${inputs}] becomes "${result}"`);