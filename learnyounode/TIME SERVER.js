var net = require('net');

var zeroFill = function(n){
	return (n<10?'0'+n:n);
}
var printDate = function(){
	var date = new Date();
	return date.getFullYear()+'-' +zeroFill(date.getMonth()+1)+'-'+zeroFill(date.getDate())+' '+zeroFill(date.getHours())+':'+zeroFill(date.getMinutes());
}
/*
var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

*/
var server = net.createServer(function(socket){
	console.log("client connected");
	console.log(printDate);
	socket.write(printDate());
	socket.on('end',function(){
		console.log("client disconnected");
	});

});
//server.listen(Number(process.argv[2]))

server.listen(process.argv[2], function() { //'listening' listener
  console.log('server bound');
  console.log('port :'+process.argv[2]);
});