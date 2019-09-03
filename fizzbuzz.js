const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fizzBuzz(arr) {
    for(i = 1; i <= arr[2]; i++){
      let s = ((i%arr[0]) ? '':'fizz')+((i%arr[1]) ? '':'buzz');
      console.log( s || i);
    }
}

rl.on('line', (line) => {
    let arr = line.split(' ').map(octet => parseInt(octet, 10));
    fizzBuzz(arr);
});
