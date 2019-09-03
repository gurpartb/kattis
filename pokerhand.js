const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    var res = pockerhand(line);
    console.log(res);
});

Array.prototype.counter = function(){

    let obj = {}; 

    this.forEach( (el) =>{

        if(obj[el]){

            obj[el]++;
        }
        else {

            obj[el] = 1;
        }
    })

    return obj;
}

function pockerhand(str){

    let arr = str.split(' ')

    let arr0 = arr.map( x => x[0])

    let obj = arr0.counter();
    
    let values = Object.values(obj);

    return Math.max(...values);
}