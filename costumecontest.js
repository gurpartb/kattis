const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstLine;
const dict = {};

// 1. read costumes
rl.on('line', (line) => {

    if(!firstLine){
        
        firstLine = line;
    }
    else {

        // 2. add or increment count
        if(dict[line]){

            dict[line]++
        }
        else {

            dict[line] = 1;
        }
    }
});

process.stdin.on('end', ()=>{

    // 3. get min val
    const minVal = getMinVal(dict);

    // 4. get keys for min val
    const keys = getKeys(dict, minVal);

    // 5. sort the keys
    keys.sort();

    // 6. print the keys
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