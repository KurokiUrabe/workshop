var url  = require('url')
var http = require('http')
var path = require('path');
server = http.createServer(function (req, res) {
	if (req.method != 'GET')
    	return res.end('send me a GET\n')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    query = url.parse(req.url,true).query;
    if("/api/parsetime"==url.parse(req.url).pathname){
    	var newDate = new Date(query.iso);
    	console.log(newDate.toUTCString())
		var json = JSON.stringify({
		    "hour": newDate.getHours(),
		  	"minute": newDate.getMinutes(),
		  	"second": newDate.getSeconds()
		});
    }else if("/api/unixtime"==url.parse(req.url).pathname){
    	var json = JSON.stringify({
		    "unixtime": Date.parse(query.iso)
		});
    }
	res.write(json);
})
server.listen(process.argv[2]);