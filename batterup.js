var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.output
});

let length;
rl.on('line', (line)=>{
    if(!length){
        length = parseInt(line);
    }else{
        let arr = line.split(' ');
        // let walks = arr.reduce(((sum,x)=>((x<0)? 1:0)+sum),0);
        let arr_num = arr.map(x=>parseInt(x));
        let non_negatives = arr_num.filter(x=>x>=0);
        let sum = non_negatives.reduce((tot, x)=>tot+x,0)
        console.log(sum/non_negatives.length);
    }
});