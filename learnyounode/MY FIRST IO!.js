var fs = require('fs');

var buff=fs.readFileSync(process.argv[2]);
var str = buff.toString();
var split = str.split('\n');
console.log(split.length-1)