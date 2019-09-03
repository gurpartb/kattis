const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const count = peragrams(line);
    console.log(count);
});

function peragrams(str = 'hello'){

    const set = new Set();
    const arr = str.split('');

    arr.forEach( x => {

        if(set.has(x)){

            set.delete(x);
        } 
        else{

            set.add(x);
        }
    });

    return Math.max(set.size - 1, 0);
}