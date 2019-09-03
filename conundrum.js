var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function print_days(str){
    let per = 'PER';
    let count = 0;
    for(let i = 0; i<str.length; i++){

        if(str[i]!=per[i%per.length]){
            count++;
        }
    }
    console.log(count);
}

rl.on('line', (line)=>{
    print_days(line);
});
