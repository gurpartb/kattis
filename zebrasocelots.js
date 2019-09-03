/* * * * * * * * * * * * * * * * * * * * *
 * Unable to solve this problem in js,   *
 * due to the limits in integer size.    *
 * Logic is correct, I implemented same  *
 * solution in python and it works.      *
 * * * * * * * * * * * * * * * * * * * * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ocelot = 'O';
let n;
let count = 1;
let bells = 0;

rl.on('line', (line) => {

    if(!n){
        n = parseInt(line);
    }
    else {

        zebrasocelots(line);
    }

});

function zebrasocelots(input){

    if(input === ocelot){
        bells += 2**(n-count);
    }

    count++;
}

process.stdin.on('end', ()=>{

    console.log(bells);
});