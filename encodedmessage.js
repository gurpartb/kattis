var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstLine;
rl.on('line', line =>{
    if(!firstLine){
        firstLine = line;
    } else {
        let dim = Math.sqrt(line.length);
        let str = '';
        for(let i = dim - 1; i >= 0; i--){
            for(let j = 0; j < dim; j++){
                str += line[i+j*dim];
            }
        }
        console.log(str)
    }
});