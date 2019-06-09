const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, p, k;
rl.on('line', (line) => {

    if(!n){

        const npk = line.split(' ').map( x => parseInt(x) );
        n = npk[0];
        p = npk[1];
        k = npk[2];
    }
    else{

        const t = line.split(' ').map( x => parseInt(x) );
        t.push(k);

        let T = t[0] - 0;
        for(let i = 1; i < t.length; i++){

            T += ( t[i] - t[i-1] ) * ( 1 + i*p/100) 
        }
        
        console.log(T);
    }
});