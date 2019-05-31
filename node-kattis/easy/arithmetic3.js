function octalToBinary(line){

    const str_oct = line.split('')
                        .map( x => parseInt(x)
                        .toString(2)
                        .padStart(3,'0'))
                        .join('');
    return str_oct;
}

function binaryToHex(binStr){

    const hex_arr =   binStr.split('')
                        .reverse()
                        .join('')
                        .match(/.{1,4}/g)
                        .reverse()
                        .map( x => parseInt(   x.split('')
                                                .reverse()
                                                .join(''), 2).toString(16)
                            );

    if(hex_arr[0] === '0' && hex_arr.length > 1){

        hex_arr.shift();
    }

    return hex_arr.join('').toUpperCase();
}

function octalToHex(line){

    const binaryStr = octalToBinary(line);
    return binaryToHex(binaryStr);
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    const res = octalToHex(line);
    console.log(res);
});