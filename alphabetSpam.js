var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const isSpace = function(x){

    let _space = 95;

    return x.charCodeAt(0) === _space;
}

const isCapital = function(x='A'){

    let A = 65;
    let Z = 90;

    return A <= x.charCodeAt(0) && x.charCodeAt(0) <= Z;
}

const isReg = function(x){

    let a = 97;
    let z = 122;

    return a <= x.charCodeAt(0) && x.charCodeAt(0) <= z;
}

const updateCounter = function(x){

    if(isSpace(x)){

        counter.space++;

    } else if(isCapital(x)){

        counter.cap++;

    } else if (isReg(x)){

        counter.reg++;

    } else {

        counter.other++;

    }
}

const counter = {
    space: 0,
    reg: 0,
    cap: 0,
    other: 0
};

rl.on('line', (line)=>{

    line.split('').forEach( (x) => updateCounter(x) );

    let format = ['space', 'reg', 'cap', 'other']

    for (const key of format) {

        console.log(counter[key]/line.length);

    };

});
