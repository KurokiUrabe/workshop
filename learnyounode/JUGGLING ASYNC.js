var bl  = require('bl')
var http = require('http')
var urls = [];
var datas = [];
count = 0;
process.argv.slice(2).forEach(function (item) {
  urls.push(item);
});
urls.forEach(function (url, index) {
var get  = http.get(url, function(res) {
	res.pipe(bl(function (err, data) {
		if(err) return err;
		datas[index]=data.toString();
		count++;
		if(count==3){
			console.log(datas.join('\n'));
		}
	}));res.setEncoding('utf8');
})
});
function printResult(){
	datas.forEach(console.log);
}
/*
	var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

*/