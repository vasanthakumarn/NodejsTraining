var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./../textfile/newfile.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
    console.log("Chunk Received ********************************\n");
});

readerStream.on('end', function () {
    console.log("COMPLETED READING ALL THE DATA ***************");
    console.log("Program Ended");
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});


