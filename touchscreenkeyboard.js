function addToObj(obj, str, x, y){

    while(x < str.length){

        const arr = [x,y];
    
        obj[str[x]] = arr;
        x++;
    }
}

function buildObj(){

    const obj = {}

    const str0 = 'qwertyuiop';
    const str1 = 'asdfghjkl';
    const str2 = 'zxcvbnm';

    let y = 0;
    let x = 0;

    addToObj(obj, str0, x, y++)
    addToObj(obj, str1, x, y++)
    addToObj(obj, str2, x, y)

    return obj;
}

function taxiCabDistanceChr(arr0, arr1){
    
    let dis = 0;

    for(let i = 0; i < arr0.length; i++){

        dis += Math.abs(arr0[i] - arr1[i])
    }

    return dis;
}

function taxiCabDistanceStrings(obj, str0, str1){

    let dis = 0;

    for(let i = 0; i < str0.length; i++){

        const chr1 = obj[str0[i]], chr2 = obj[str1[i]];

        dis += taxiCabDistanceChr(chr1, chr2)
    }

    return dis;
}

function recordDistance(obj, str0, str1, disObj){

    const dis = taxiCabDistanceStrings(obj, str0, str1)

    if(disObj[dis]){

        disObj[dis].push(str1);
    }
    else {
        disObj[dis] = [str1];
    }

}

function printRes(disObj){

    const keys = Object.keys(disObj).sort( (a,b) => a - b );
    
    for(let i = 0; i < keys.length; i++){

        const vals = disObj[keys[i]].sort();

        for(let j = 0; j < vals.length; j++){

            console.log(vals[j], keys[i]);
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let t, checkStr, l, obj, disObj;

rl.on('line', (line) => {

    if(!t){

        t = line;
        obj = buildObj();
    }
    else if(!l){

        const arr = line.split(' ')
        checkStr = arr[0];
        l = parseInt(arr[1]);
        disObj = {}
    }
    else {

        recordDistance(obj, checkStr, line, disObj)
        l--;

        if(!l){
            printRes(disObj)
        }
    }
});