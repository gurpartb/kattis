const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    var nums = line.split(' ');
    var guests = parseInt(nums[0]);
    var chickens = parseInt(nums[1]);

    var diff_abs = Math.abs(guests - chickens);
    var piece_s = (diff_abs === 1)? 'piece': 'pieces';

    if(guests < chickens){

        console.log(`Dr. Chaz will have ${diff_abs} ${piece_s} of chicken left over!`);

    } else {

        console.log(`Dr. Chaz needs ${diff_abs} more ${piece_s} of chicken!`);
    }
});