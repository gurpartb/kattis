const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var dividend = parseInt(nums[0]);
    var divisor = parseInt(nums[1]);
    if(divisor){
        var quotient = (dividend/divisor)>>0;
        var remainder = dividend%divisor;
        console.log(`${quotient} ${remainder} / ${divisor}`);
    }
});