function simonsays(line){

    const simon = 'Simon';
    const says = 'says';

    const arr = line.split(' ');

    return (arr[0] === simon && arr[1] === says)? arr.splice(2,arr.length).join(' ') : null;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
rl.on('line', (line) => {

    if(!n){

        n = line;
    }
    else{

        const res = simonsays(line);

        if(res){
            
            console.log(res);
        }
    }
});