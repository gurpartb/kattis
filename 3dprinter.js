const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var statues = parseFloat(line);
    console.log(Math.ceil(Math.log2(statues))+1)
});