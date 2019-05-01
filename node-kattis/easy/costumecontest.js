const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstLine;
const dict = {};

// 1. read costume
rl.on('line', (line) => {

    if(!firstLine){
        
        firstLine = line;
    }
    else {
        // add or increment count
        if(dict[line]){

            dict[line]++
        }
        else {

            dict[line] = 1;
        }
    }
});

process.stdin.on('end', ()=>{

    const minVal = getMinVal(dict);
    const keys = getKeys(dict, minVal);
    keys.sort();
    print(keys);
})

function getMinVal(obj){

    return Math.min(...Object.values(obj));
}

function getKeys( _obj, _val){

    const keys = [];

    Object.entries(_obj).forEach( ([key, val]) =>{

        if(val === _val){
            keys.push(key);
        }
    });

    return keys;
}

function print(arr){

    console.log(arr.join("\r\n"))
}