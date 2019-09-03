// flow chart diagram link
// https://drive.google.com/file/d/1RZ3njwwWMZ5xPSTEuEJU3OnhzewDr9Yx/view?usp=sharing

function findPrimeFactor(q){

    let p = 2;

    if(q % p === 0){
        return p;
    }

    p = 3;

    while(true){

        if(q % p === 0){
            return p;
        }

        if(p*p > q){
            return q;
        }

        p += 2;
    }
}

function isPrimePower(q){

    if(q === 1){
        return false;
    }

    let p = findPrimeFactor(q);

    while(true){

        q = q / p;

        if(q === 1){
            return true;
        }

        if(q % p !== 0){
            return false;
        }
    }
}

function olderBrother(q){

    let res = isPrimePower(q)? 'yes': 'no';
    console.log(res);

}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    olderBrother(parseInt(line))
});