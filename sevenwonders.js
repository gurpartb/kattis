var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const counter = {'T':0, 'C':0, 'G':0}

count = function(str){
    str.split('').forEach(x=>counter[x]++);
}

function score(){
    let arr = Object.values(counter);
    let square_sum = arr.reduce((acc, cv)=> acc + cv*cv,0);
    return square_sum + Math.min(...arr)*7;
};

rl.on('line', line =>{
    count(line);
    console.log(score());
});
