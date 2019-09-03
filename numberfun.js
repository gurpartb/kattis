var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first_line;
rl.on('line', line => {
    if(!first_line){
        first_line = line;
    } else {

        let num_arr = line.split(' ').map(x => parseInt(x));
        let a = num_arr[0]; let b = num_arr[1]; let c = num_arr[2];
        
        if(a + b == c || Math.abs(a - b) == c || a * b == c || a / b == c || b / a == c){
            console.log('Possible');
        } else {
            console.log('Impossible');
        }
    }
});