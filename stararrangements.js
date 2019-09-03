var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

rl.on('line', line => {
    let n = parseInt(line);
    console.log(n.toString()+':');
    let k = n+1
    for(let i = 2; i<= (n+1)/2; i++){
        if((n+i-1)%(2*i-1)==0||n%(2*i-1)==0){
            let res = i.toString()+','+(i-1).toString();
            console.log(res);
        }
        if(n%i==0){
            let res = i.toString()+','+i.toString();
            console.log(res);
        }
    }
});