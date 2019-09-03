var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dict = new Map();
let first_line;
let line_count = -1;
rl.on('line', line=>{
    line_count++;
    if(!first_line){
        first_line = parseInt(line);
    }else{
        let l = line.split(' ')
        if(parseInt(l[0])){
            dict[parseInt(l[0])/2]=l[1];
        }else{
            dict[parseInt(l[1])]=l[0];
        }
    }
    if(line_count===first_line){
        for(e of Object.values(dict)){
            console.log(e);
        }
    }
});