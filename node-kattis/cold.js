var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cold_days(arr = [0]){
    let count = 0;
    for(i of arr){
        count += (i < 0) ? 1 : 0; 
    }
    console.log(count);
}

var n = -1;
rl.on('line', (line)=>{
    if(n==-1){
        n = line;
    } else {
        let arr = line.split(' ').map(x=>parseInt(x));
        cold_days(arr);
    }
})