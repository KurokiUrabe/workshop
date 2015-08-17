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
module.exports = function(filePath,fileExt,callback){
	fs.readdir(filePath,function(err,list){
		if(err)return callback(err);
	/*	list.forEach(function(item){
			if(path.extname(item)==='.'+fileExt)
			newArray.push(item);
		});*/
		list = list.filter(function (item){
			return path.extname(item)=== '.'+fileExt;
		})
		callback(null,list);
	})	
}
