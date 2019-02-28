var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = (str) => {
    let arr = str.split(' ').map( x => parseInt(x));
   console.log(Math.max(arr[1]-arr[0], arr[2]-arr[1]) - 1);
}

rl.on('line', (line) => main(line));