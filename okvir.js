function printline(count, l, width, str = ''){
    
    let even = '#'
    let odd = '.'

    if(count%2){
        even = '.'
        odd = '#'
    }

    let resStr = ''
    while(resStr.length < l){
        resStr += (resStr.length%2)? odd : even;
    }
    resStr += str
    while(resStr.length < width){
        resStr += (resStr.length%2)? odd : even;
    }
    console.log(resStr);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ulrd, mn;
const arr = [];
rl.on('line', (line) => {

    if(!mn){

        mn = line.split(' ').map( x => parseInt(x))
    }
    else if(!ulrd){

        ulrd = line.split(' ').map( x => parseInt(x))
    }
    else {

        arr.push(line)
    }
});

process.stdin.on('end', ()=>{

    const width = ((arr[0])? arr[0].length : 0) + ulrd[1] + ulrd[2];
    let count = 0;
    while(count < ulrd[0]){
        printline(count, ulrd[1], width)
        count++;
    }

    arr.forEach( el =>{
        printline(count, ulrd[1], width, el)
        count++;
    })

    let i = 0
    while(i < ulrd[3]){
        printline(count, ulrd[1], width)
        count++;
        i++;
    }
});