var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line =>{
    let arr = line.split(' ').map(x => parseFloat(x));
    let semiperimeter = arr.reduce((acc, num)=>acc+num/2,0);
    let sqr_area = arr.reduce((acc, num)=> acc*(semiperimeter - num ), 1);
    console.log(Math.sqrt(sqr_area));
});