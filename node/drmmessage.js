const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var A_ascii = 65;
var alpha = 26;
rl.on('line', (line) => {
    let arr = line.split('').map(x => x.charCodeAt()-A_ascii);
    // split array
    let midIndex = arr.length/2;
    let arrFront = arr.slice(0,midIndex);
    let arrBack = arr.slice(midIndex);
    // sum arrays
    let sumFront = arrFront.reduce((a,b)=>a+b);
    let sumBack = arrBack.reduce((a,b)=>a+b);
    // add offset to each element and mod 26
    arrFront = arrFront.map(x=> (x+sumFront)%alpha);
    arrBack = arrBack.map(x=> (x+sumBack)%alpha);
    // sum corresponding elements from each array
    // mod sum by 26, add 65, convert to char
    let str = ''
    for(let i = 0; i < midIndex; i++){
        str += String.fromCharCode((arrFront[i]+arrBack[i])%alpha+A_ascii);
    }
    console.log(str);
});