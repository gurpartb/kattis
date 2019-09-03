function dasblinkenlights(arr){
    for (let index = 1; index <= arr[2]; index++) {
        if(index%arr[0]===0 && index%arr[1]===0){
            return 'yes';
        }
    }
    return 'no';
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let arr = line.split(' ').map(x => parseInt(x));
    let res = dasblinkenlights(arr);
    console.log(res);
});