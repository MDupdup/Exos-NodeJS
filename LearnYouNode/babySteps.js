var i = 2;
var argument = 0;

while(process.argv[i])
{
	argument += parseInt(process.argv[i])
	i++;
}

console.log(argument);