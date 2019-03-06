var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', line =>{

    let arr = line.split(' ').map(x => parseFloat(x));

    let str = '';

    for(let i = 1; i <arr.length; i++){
        
        if( arr[i-1] > arr[i] ){

            str += '+'

        } else if( arr[i-1] < arr[i] ){

            str += '-'

        }
    }
    console.log(str)
});