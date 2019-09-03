var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line =>{
    if(line !== '0'){

        let arr = line.split(' ').map(x => parseFloat(x));
        let dx = Math.abs(arr[0] - arr[2]);
        let dy = Math.abs(arr[1] - arr[3]);
        let p = arr[4];
        let dis = Math.pow( Math.pow(dx, p) + Math.pow(dy, p) , 1/p);
        console.log(dis)
        
    }
})