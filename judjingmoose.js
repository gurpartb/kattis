const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

rl.on('line', line => {

    const line_arr = line.split(' ')
    const left = parseInt(line_arr[0])
    const right = parseInt(line_arr[1])

    let str = ''
    let max_double = Math.max(left, right)*2

    if(max_double === 0){

        str = 'Not a moose';

    } else if(left === right) {

        str = `Even ${max_double}`;

    } else {

        str = `Odd ${max_double}`
    }

    console.log(str)
})