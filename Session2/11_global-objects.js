console.log("__dirname", __dirname);
console.log("__filename", __filename);
let seconds =0;

console.time("Getting data");
const t = setInterval(function(){
    seconds += 2;
    console.log(seconds +" Seconds Elapsed!");
    if(seconds >10) {
        clearInterval(t);
    }
}, 1000);


const t1 = setTimeout(function() {
    console.log('Timeout happened in 2 seconds');
}, 2000);

console.info("Program Started");

console.timeEnd('Getting data');
