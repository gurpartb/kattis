
function build_obj(){

    const obj = {};
    const a = 97;
    const z = 122;

    for(let i = a; i <= z; i++){

        obj[String.fromCharCode(i)] = 0;
    }

    return obj;
}

function update_obj(obj, str){

    const arr = str.toLowerCase().split('');
    const a = 'a';
    const z = 'z';

    arr.forEach( x =>{

        if(a <= x && x <=z ){

            obj[x]++;
        }
    });
}

function keysOfVal(obj, val){

    let str = '';

    for(let key in obj){

        if(obj[key] === val){

            str += key;
        }
    }

    return str;
}

function quickbrownfox(str){

    const obj = build_obj();

    update_obj(obj, str);

    const val = 0;

    const pangram = "pangram"

    let res = keysOfVal(obj, val);

    if(res){

        res = "missing " + res;
    }
    else {

        res = pangram;
    }

    console.log(res);
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let num;

rl.on('line', (line) => {

    if(!num){

        num = line;
    }
    else {

        quickbrownfox(line);
    }
});