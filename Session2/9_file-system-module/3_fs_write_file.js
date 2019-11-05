var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('./../textfile/newfile.txt', 'Node JS FIle System Module!', function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('./../textfile/newfile.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
