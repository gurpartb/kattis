const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let maxLookAway = 0;
let minLookBack = 1000;
let n;
rl.on('line', (line) => {

    if(!n){

        n = line;
    }
    else {
        let arr = line.split(' ').map( x => parseInt(x));

        maxLookAway = Math.max( maxLookAway, arr[0]);
        minLookBack = Math.min( minLookBack, arr[1]);
    }
});

process.stdin.on('end', () => {

    const str = (maxLookAway <= minLookBack)? 'gunilla has a point':'edward is right';
    console.log(str);
});

