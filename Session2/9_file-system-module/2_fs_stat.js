var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.stat('./../textfile/data.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());    
});
