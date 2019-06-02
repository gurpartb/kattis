const octalToBinaryObj = {'0':'000', '1':'001','2':'010','3':'011','4':'100','5':'101', '6':'110','7':'111'};

function octalToBinary(octalStr){

    const binArr = octalStr.split('').map( octal => octalToBinaryObj[octal]);

    const binStr = binArr.join('');

    return binStr;
}

const binaryToHexObj = {'0000':'0', '0001':'1', '0010':'2', '0011':'3', '0100':'4', '0101':'5', '0110':'6', '0111':'7', '1000':'8', '1001':'9', '1010':'A', '1011':'B', '1100':'C', '1101':'D', '1110':'E', '1111':'F'}

function binaryToHex(binStr){

    const four = 4;
    const zero = '0';

    // binStrCopy is binStr paded with '0' if needed. 
    // Paddig binStrCopy start with '0' ensures binStr.length is evenly divisible by 4
    const binStrCopy = ''.padStart( four - ( binStr.length % four ) , zero ) + binStr;

    // since binStrCopy.length is evenly divisible by 4,
    // hexArr will contain string of size 4 at each index
    const hexArr = binStrCopy.match(/.{1,4}/g).map( bin => binaryToHexObj[ bin ] );

    // remove the leading zero, unless '0' is the only element
    if(hexArr[0] === '0' && hexArr.length > 1){

        hexArr.shift();
    }

    const hexStr = hexArr.join('');

    return hexStr;
}

function octalToHex(octalStr){

    const binaryStr = octalToBinary(octalStr);
    const hexStr = binaryToHex(binaryStr);

    return hexStr;
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