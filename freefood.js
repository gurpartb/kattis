const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n = 0;
var lineCount = -1;
const days = new Set();
rl.on('line', (line) => {
    if(!n){
        n = parseInt(line);
    } else {
        let arr = (line.split(' ').map(octet => parseInt(octet, 10)));
        for(let j = arr[0]; j<= arr[1]; j++){
            days.add(j);
        }
    }

    lineCount++;
    if(lineCount == n){
        console.log(days.size);
    }
});
