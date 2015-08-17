var count=0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	count+=Number(process.argv[i]);
}
console.log(count);