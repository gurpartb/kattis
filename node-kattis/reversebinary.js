const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let n = parseInt(line)
    let str = '';
    while(n>0){
        str = (n%2)? 1+str:0+str;
        n = Math.floor(n/2)
    }
    console.log(parseInt(str.split('').reverse().join(''), 2))
});