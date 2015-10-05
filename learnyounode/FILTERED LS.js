var fs = require('fs');
var path = require('path')
/*function doFilter(item){
	if(path.extname(item)=='.'+process.argv[3].toString())
		console.log(item);
}
fs.readdir(process.argv[2],function(err,list){
	if(err)return err;
	list.forEach(doFilter);
})*/
fs.readdir(process.argv[2],function(err,list){
	if(err)return err;
	list.forEach(function(item){
		if(path.extname(item)==='.'+process.argv[3])
		console.log(item);
	});
})