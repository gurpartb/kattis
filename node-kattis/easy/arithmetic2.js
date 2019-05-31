const octToBinObj = {'0':'000', '1':'001','2':'010','3':'011','4':'100','5':'101', '6':'110','7':'111'};

function octToBin(line){

    const arr = line.split('');

    let binStr = '';

    arr.forEach( x => {

        binStr += octToBinObj[x];
    });

    return binStr;
}

function strToArr(str, num){

    const remainder = str.length % num;

    const str1 = str.slice(remainder);

    let arr = [];

    if(str1.length > 4){

        arr = str1.match(/.{1,4}/g);

    }else if(str1){

        arr.push(str1);
    }


    if(remainder != 0){

        arr.unshift(str.slice(0,remainder))
    }

    return arr;
}

const binToHexObj = {'0000':'0', '0001':'1', '0010':'2', '0011':'3', '0100':'4', '0101':'5', '0110':'6', '0111':'7', '1000':'8', '1001':'9', '1010':'A', '1011':'B', '1100':'C', '1101':'D', '1110':'E', '1111':'F'}

function binToHex(arr){

    const arr1= new Array(arr.length);

    let el = arr[0];

    el = el.padStart(4, '0');

    arr1[0] = binToHexObj[el];

    for(let i = 1; i < arr.length; i++){
        
        arr1[i] = binToHexObj[arr[i]];
    }

    return arr1;
}

function octalToHex(line){

    const binStr = octToBin(line);

    const arr = strToArr(binStr, 4);

    const arr2 = binToHex(arr);

    if(arr2[0] === '0' && arr2.length > 1){

        arr2.shift();
    }

    const res = arr2.join('')
    return res;
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