const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var height = 4;

rl.on('line', (line) => {
    var nums = line.split(' ');
    var n = parseInt(nums[0]);
    var h = parseInt(nums[1]);
    var v = parseInt(nums[2]);

    var vol = Math.max(n-h, h) * Math.max(n-v, v) * height;
    console.log(vol);
    rl.close();
});