const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var guests = parseInt(nums[0]);
    var chickens = parseInt(nums[1]);

    var dchicken = Math.abs(guests - chickens);

    var p = (dchicken === 1)? 'piece': 'pieces'

    if( guests < chickens){
        console.log(`Dr. Chaz will have ${dchicken} ${p} of chicken left over!`)
    } else {
        console.log(`Dr. Chaz needs ${dchicken} more ${p} of chicken!`)
    }
    /*Solve the test case and output the answer*/
});