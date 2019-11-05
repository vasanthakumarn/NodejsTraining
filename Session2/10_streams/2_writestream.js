var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./../textfile/newfile.txt');
var writerStream = fs.createWriteStream('./new-data.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
    writerStream.write("Chunk Received ********************************\n"+chunk);
    console.log("Chunk Received ********************************\n");
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");
