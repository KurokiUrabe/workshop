var mymodule = require('./MYMODULAR.js');

var filePath = process.argv[2];
var fileExt = process.argv[3];

mymodule(filePath, fileExt, function(err,list){
	if(err) throw err;
		
	list.forEach(function(item){
		console.log(item);
	});
	
});