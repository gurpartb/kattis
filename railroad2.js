var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line=>{
    let num_arr = line.split(' ').map(x=> parseInt(x));
    let possible = (num_arr[0]*2+num_arr[1])%2 ? 'impossible': 'possible';
    console.log(possible);
})