const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const backSlash = '\\';
const forwardSlash = '/';
let count = 0;
rl.on('line', (line) => {

    const arr = line.split('')

    arr.forEach( (char, i) =>{

        if(char === forwardSlash){

            console.log('forwardSlash at ',i);
        }
        else if(char === backSlash){

            console.log('backSlash at ',i);
        }


    });
    count++;
});