const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;
var totCost = 0;
var cost = 0;
var n = 0;
rl.on('line', (line) => {
    lines.push(line)
    if( count == 0 ){
        cost = parseFloat(line)
    }else if( count == 1){
        n = parseInt(line)
    }else{
        var nums = line.split(' ');
        var a = parseFloat(nums[0]);
        var b = parseFloat(nums[1]);
        totCost += cost*a*b;
    }
    if(count == n + 1){
        console.log(totCost);
    }
    count++;
},);