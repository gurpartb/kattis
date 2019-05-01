const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var t;
var n;
var toys;

rl.on('line', (line) => {
    if(!t){
        t = line;
    }
    
    else{
        if(!n){
            n = parseInt(line);
            toys = {}
        }
        else {
            let arr = line.split(' ');
            if(toys[arr[0]]){
                toys[arr[0]] += parseInt(arr[1]);
            }
            else {
                toys[arr[0]] = parseInt(arr[1]);
            }
            n -= 1;
            if(!n){
                var sortable = [];
                for (var toy in toys) {
                    sortable.push([toy, toys[toy]]);
                }
                sortable = sortable.sort((a,b)=> a[0]>b[0])
                sortable = sortable.sort((a,b)=> b[1]-a[1])
                console.log(sortable.length)
                sortable.forEach(toy=>{
                    console.log(toy[0], toy[1]);
                });
            }
        }
    }
});