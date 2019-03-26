const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let m;
rl.on('line', (line) => {
    if(!n){
        n = line;
    }else if(!m){
        m = line;
    } else {
        let arr = line.split(' ').map(x => parseInt(x));
        let res = parking2(arr)
        console.log(res);
        m = null;
    }
});

function parking2(arr){
    let obj = arr.reduce((a,b) => {
        if(a.min > b) a.min = b;
        if(a.max < b) a.max = b;
        return a;
    }, { min : arr[0], max : arr[0]} );
    return (obj.max - obj.min)*2;
}