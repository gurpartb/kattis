function lastfactorialdigit(n){

    const arr = [1, 1, 2, 6, 4]
    const res = (arr[n])? arr[n] : 0;
    return res;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.on('line', (line) => {
    
    if(!n){

        n = line;
    }
    else {

        const k = parseInt(line);
        const res = lastfactorialdigit(k);
        console.log(res);
    }
});