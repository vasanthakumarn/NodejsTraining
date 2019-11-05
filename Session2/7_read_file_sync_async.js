const fs = require('fs');

console.log("************************************\n");
//const data = fs.readFileSync('./textfile/data.txt');
//console.log(data.toString());
console.log("************************************\n");

fs.readFile('./textfile/data.txt', (err, data) => {
    console.log("***********************");
    console.log(data.toString());
});

console.log('END OF PROGRAM');
