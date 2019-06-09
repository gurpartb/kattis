function createTab(){

    const tab = {

        ENTER : [],
        EXIT : []
    }

    return tab;
}

function editLog(line){

    const arr = line.split(' ');

    const action = arr[0];
    const name = arr[1];
    const time = arr[2];

    if(!tabs[name]){

        tabs[name] = createTab();
    }

    tabs[name][action].push(time);
}

function bill(obj = {ENTER: [0], EXIT: [23] }, price){

    const enterArr = obj.ENTER;
    const exitArr = obj.EXIT;

    let total = 0;

    enterArr.forEach( (el, i) => total += ( exitArr[i] - el ) * price );

    return total;
}

function printTabs(price){

    const namesArr = Object.keys(tabs);
    const namesSorted = namesArr.sort();

    namesSorted.forEach( name =>{

        const amount = bill( tabs[name], price )
        console.log(name, '$'+parseFloat(amount).toFixed(2));
    });
}

function parkOpen(count){

    if(count > 1){

        console.log();
    }

    tabs = {};
}

function parkClose(count, price){

    console.log('Day', count);
    printTabs(price);
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let tabs = {}
const price = 0.10;
let count = 0;

rl.on('line', (line) => {
    
    if(line === 'OPEN'){

        count++;
        parkOpen(count);
    }
    else if(line === 'CLOSE'){

        parkClose(count, price);
    }
    else { 

        editLog(line);
    }
});