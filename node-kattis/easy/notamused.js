function createTab(){

    const tab = {

        ENTER : [],
        EXIT : []
    }

    return tab;
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

        if(count){

            console.log();
        }

        count++;
        tabs = {};
    }
    else if(line === 'CLOSE'){

        console.log('Day', count);
        printTabs(price);
    }
    else { 

        const arr = line.split(' ');

        const action = arr[0];
        const name = arr[1];
        const time = arr[2];

        if(!tabs[name]){

            tabs[name] = createTab();
        }

        tabs[name][action].push(time);
    }

});