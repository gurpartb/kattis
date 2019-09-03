const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let c;
rl.on('line', (line) => {

    if(!c){
        
        c = line;
    }
    else {

        let arr = line.split(' ').map( x => parseInt(x) );
        arr = arr.slice(1);

        let avg = average(arr);
        let abvAvg = aboveAverage(avg, arr);
        let str = formatStr(abvAvg, 100, 3, '%')

        console.log(str);
    }
});

function formatStr(num, mult = 1, degree = 2, sign = '%'){
    let str = parseFloat(num * mult).toFixed(degree) + sign;
    return str;
}

function aboveAverage(avg, arr = []){

    let count = 0;

    arr.forEach( x => {

        if( x > avg){

            count ++;
        }
    });

    let abvAvg = count / arr.length;

    return abvAvg;
}

function average(arr = []){

    let sum = arr.reduce( (a,b) => a + b, 0);

    let avg = sum / arr.length;

    return avg;
}