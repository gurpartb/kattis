const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    const radius = parseInt(line);
    const pi = Math.PI;
    const res = herman(radius, pi);

    console.log(res[0]);
    console.log(res[1]);
});

function herman( radius, pi){

    let radSqr = radius * radius;
    let areaCircle = radSqr * pi;
    let areaTaxiCircle = 2 * radSqr;

    return [areaCircle, areaTaxiCircle];
}