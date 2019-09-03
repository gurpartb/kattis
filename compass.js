function clockwiseShift(delta, degrees_in_circle){

    if(delta >= 0){

        return delta;
    }

    return delta + degrees_in_circle;
}

function counterClockwiseShift(delta, degrees_in_circle){

    if(delta >= 0){

        return delta - degrees_in_circle;
    }

    return delta;
}

function compass(n1, n2, degrees_in_circle){

    const delta = n2 - n1;
    const clk = clockwiseShift(delta, degrees_in_circle);
    const cntr = counterClockwiseShift(delta, degrees_in_circle);
    const min = (Math.abs(cntr) < clk) ? cntr: clk;
    return min;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = []
rl.on('line', (line) => {

    arr.push(parseInt(line));
});

process.stdin.on( 'end', ()=>{

    const degrees_in_circle = 360;
    const min = compass(arr[0], arr[1], degrees_in_circle)
    console.log(min);
});