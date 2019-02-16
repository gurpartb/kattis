const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let arr = line.split(' ').map(octet => parseInt(octet, 10));
    let n = arr[0]<=arr[1]? arr[0]:arr[1];
    let m = arr[0]<=arr[1]? arr[1]:arr[0];
    for(let i = n + 1; i <= m + 1; i++){
        console.log(i);
    }
});
