var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first_line;
rl.on('line', line => {
    if(!first_line){
        first_line = line;
    }else{
        let arr = line.split(' ').map(x=>parseInt(x));
        let last_pop = 0.5;
        let imp = 0;
        for(current_pop of arr){
            if(current_pop!=0){
                let pos_imp = current_pop - 2*last_pop;
                imp += pos_imp>=0?pos_imp:0;
                last_pop = current_pop;
            }else{
                console.log(imp);
            }
        }
    }
});