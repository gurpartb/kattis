const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n_dm;

rl.on('line', (line) => {
    
    if(!n_dm){

        n_dm = line.split(' ').map( x => parseInt(x) );
    }
    else {

        let d = line.split(' ').map( x => parseInt(x) );
        let res = earlyWinter(n_dm[1], d);

        if(res < n_dm[0]){

            console.log(`It hadn't snowed this early in ${res} years!`);
        }
        else {

            console.log('It had never snowed this early!');
        }
    }
});

function earlyWinter( dm, d = [1, 2, 4] ){

    let i = 0;
    while(d[i] > dm && i < d.length) i++;

    return i;
}

