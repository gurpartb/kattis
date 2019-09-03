const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseBinary(num){
    let rev = '';
    while(num>0){
        rev += (num%2)? 1 : 0;
        num = Math.floor(num/2)
    }
    return parseInt(rev, 2);
}

rl.on('line', (line) => {
    let num = parseInt(line)
    let rev = reverseBinary(num)
    console.log(rev)
});