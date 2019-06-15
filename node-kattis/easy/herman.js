const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const radius = parseInt(line);
    const radSqr = radius * radius;
    const areaCircle = radSqr * Math.PI;
    const areaCircleTaxicab = radSqr * 2;
    console.log(areaCircle)
    console.log(areaCircleTaxicab)
});