const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n;
var index = 0;
var arr;
rl.on('line', (line) => {
    if(!n){
        n = parseInt(line);
        arr = Array(n);
        console.log(arr);
    }
    else {
        let locRad = line.split(' ');
        arr[index] = new Can(parseFloat(locRad[0]), parseInt(locRad[1]));
        index += 1;
    }
});

process.stdin.on('end',()=>{
    canofworms();
});

class Can{
    constructor(loc, rad){
        this.loc = loc;
        this.negRange = loc - rad;
        this.posRange = loc + rad;
    }
}

function withinRadius(cany, canx){
    if(cany.posRange <= canx.loc && canx.loc <= cany.posRange){

    }
    let dis = Math.abs(cany.loc - canx.loc);
    return dis <= cany.rad;
}

function canofworms(){
    arr = arr.sort((a, b)=> a.loc - b.loc);
    arr.forEach(cany =>{
        let count = 0;
        arr.forEach(canx =>{
            if(withinRadius(cany, canx)){
                count += 1;
            }
        })
        process.stdout.write(count.toString()+' ');
    })
}