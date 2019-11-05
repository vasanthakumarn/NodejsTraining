var fs =  require('fs');

var readStream = fs.createReadStream('./../textfile/newfile.txt');
var writeStream = fs.createWriteStream('./pipedtext.txt');

readStream.pipe(writeStream);