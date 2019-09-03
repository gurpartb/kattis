const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdins
});

var month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var day = 'Wednesday Thursday Friday Saturday Sunday Monday Tuesday'.split(' ');
var num_days = 7;

function print_day(arr){
    let sum = arr[0];
    for(let i = 1; i < arr[1]; i++){
        sum += month[i];
    }
    console.log(day[sum%num_days]);
}

rl.on('line', (line)=>{
    let arr = line.split(' ').map(octet => parseInt(octet, 10));
    print_day(arr)
});