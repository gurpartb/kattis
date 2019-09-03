function sumOfOthers(arr){

    const sum = arr.reduce( (a,b) => (a+b),0);

    for(let i = 0; i < arr.length; i++){

        const el = arr[i];

        if(el === sum - el){

            return el;
        }
    }
 }

 const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    const arr = line.split(' ').map( x => parseInt(x));
    
    const res = sumOfOthers(arr);

    console.log(res);
});