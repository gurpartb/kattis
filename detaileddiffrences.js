const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function detailDiff(a,b){
    let str = '';
    for(let i = 0; i < a.length; i++){
        str += a[i]==b[i]? '.' : '*';
    }
    console.log(a.join(''));
    console.log(b.join(''));
    console.log(str+'\n');
}

var n = 0;
var count = -1;
var arr = []
rl.on('line', (line) => {
    count ++;
    if(!n){
        n = parseInt(line)*2;
    }else{
        arr.push(line.split(''));
        if(count%2==0){
            detailDiff(arr[0], arr[1]);
            arr = []
        }
    }
});