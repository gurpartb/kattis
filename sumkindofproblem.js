function sum(n){

    const s = (n*(n+1))/2;
    return s;
}

function sumOdd(n){

    const sum = n*n;
    return sum;
}

function sumEven(n){

    const s = sum(n)*2;
    return s;
}

function sumkindofproblem(i, x){

    console.log(i, sum(x), sumOdd(x), sumEven(x))
};

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
    else{

        const arr = line.split(' ').map(x =>parseInt(x))
        sumkindofproblem( ...arr)
    }
});