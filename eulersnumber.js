var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let memo = [1]

function factorial(n){

    while(memo.length <= n){

        memo[ memo.length ] = memo[memo.length - 1] * memo.length;
    }
}

function main(line){

    factorial(parseFloat(line));
     
    let e = memo.reduce((acc, n)=> acc + (1/n) ,0);

    console.log(e);
}

rl.on('line',line => main(line));