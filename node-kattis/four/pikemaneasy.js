// To fully understand the problem I partially looked over jhonnold's github solution.
// I'm not sure if its the Autor or I, but I didn't understand how to calculate
// the penalty. On top of that there are only two basic examples, which are
// of no help in providing greater insight into the problem.
const readline = require('readline');

let arr1; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    if(!arr1){

        arr1 = line.split(' ').map( x => parseInt(x) );
    } 
    else {

        let penMod = 1000000007;
        let arr2 = line.split(' ').map( x => parseInt(x) );
        pikemaneasy(...arr1, ...arr2, penMod);
    }
});


function pikemaneasy(N, T, A, B, C, t0, penMod){

    let t = new Array(N);
    t[0] = t0;

    // i in [1 , N - 1]
    let i = 1;
    while(i < N ){

        t[i] = ( (A * t[i-1] + B) % C) + 1;
        i++;
    }

    // Maximize number of algorithms that can be tested
    t.sort( (a,b) => a - b );

    let penalty = 0;
    let tp = 0;

    // Calculate penalty time
    let j = 0;
    while(j < N && tp + t[j] <= T){

        penalty = (penalty + t[j] + tp) % penMod;
        tp += t[j];
        j++
    }

    console.log(j, penalty);
}