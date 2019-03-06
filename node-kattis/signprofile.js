var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', line =>{

    let arr = line.split(' ').map(x => parseFloat(x));

    let str = '';

    if( arr[0] < arr[1]) str += '-'

    if( arr[0] > arr[1]) str += '+'

    if( arr[1] < arr[2] && str != '-') str += '-'

    if( arr[1] > arr[2] && str != '+' ) str += '+'

    if( arr[2] < arr[3] && str[str.length - 1] != '-') str += '-'

    if( arr[2] > arr[3] && str[str.length - 1] != '+' ) str += '+'

    console.log(str)
});