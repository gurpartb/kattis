function binaryToOctalMap(){

    const obj = {};
    const oct = 8;
    let i = 0;

    while(i < oct){

        const key = i.toString(2).padStart(3, '0')
        obj[key] = i.toString();
        i++;
    }

    return obj;
}

function binStrLengthModZero(str, n){

    const mod = str.length % n;

    const binStr =  ((mod)? ''.padStart(n - mod, '0') : '') + str ;

    return binStr;
}

function binaryStringToOctal(binStr, octal){

    const maxBinInOctalDigit = 3;
    const binEvenStr = binStrLengthModZero(binStr,maxBinInOctalDigit);
    const arr = binEvenStr.match(/.{1,3}/g);
    let res = '';
    arr.forEach( x => res += octal[x] );
    return res;
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const octal = binaryToOctalMap()

rl.on('line', (line) => {

    const res = binaryStringToOctal(line, octal)
    console.log(res)
});