var readline = require('readline');

// sadly this solution doesnt work

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first_line;
rl.on('line', line=>{
    if(!first_line){
        first_line = line;
    }else{
        let arr = line.split(' ');
        let num = parseInt(arr[2]);
        let base = parseInt(arr[1]);
        let num_base = num.toString(base);
        // console.log(num_base);
        let SSD_arr = num_base.toString().split('').map(x=>parseInt(x,base));
        // console.log(SSD_arr)
        let SSD = SSD_arr.reduce((sum, i)=>sum+i*i,0);
        console.log(SSD);
    }
});