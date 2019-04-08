var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first_line;

rl.on('line', line=>{

    if(!first_line){

        first_line = line;
    }
    else {

        let arr = line.split(' ');
        
        let count = arr[0];
        let b = parseInt(arr[1]);
        let n = parseInt(arr[2]);

        let res = SSD(b, n);
        console.log(count, res);
    }
});

function SSD(b, n){
    
    let num_base = n.toString(b);
    let arr = num_base.split('');
    arr = arr.map(x => parseInt(x,b)**2);
    return arr.reduce( (a, b) => a + b, 0);
}