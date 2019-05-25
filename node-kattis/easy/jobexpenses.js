function jobexpenses(str){

    let arr = str.split(' ');

    arr = arr.map( x=> parseInt(x));

    arr = arr.filter( x => x < 0);

    const sum = Math.abs(arr.reduce( (a,b)=> a+b,0));

    return sum;
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

        const sum = jobexpenses(line);
        console.log(sum);
    }
});