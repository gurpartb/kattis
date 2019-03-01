var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = []
rl.on('line', line =>{
    line.split(' ').forEach(word => {
        arr.push(word);
    });
});

rl.input.on('end', ()=>{
    main();
 });

function main(){
    const out = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            out.push(arr[i]+arr[j]);
            out.push(arr[j]+arr[i]);
        }
    }
    new Set(out.sort()).forEach(x => console.log(x));
}
