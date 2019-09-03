var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let width;
let n;
let count = 0;
let area  = 0;

rl.on('line', line => {

    if(!width){

        width = parseFloat(line);

    } else if(!n){

        n = parseInt(line);

    }else{
        
        count++
        let arr = line.split(' ');
        area += parseFloat(arr[0])*parseFloat(arr[1]);
        if(count === n) console.log(area/width);
    }
});
