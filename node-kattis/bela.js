var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dict = {'A':11, 'K':4, 'Q':3, 'JD':20, 'J':2, 'T':10, '9D':14};
let dominant = '';
let points = 0;
let linecount = -1;

rl.on('line', (line)=>{
    linecount++;

    if(!dominant){

        dominant = line.split(' ');

    }else{

        let hand = line.split('');

        if((hand[0]=='J'||hand[0]=='9')&&hand[1]==dominant[1]){

            points += dict[hand[0]+'D'];

        }else{

            points += dict[hand[0]] || 0;
        }
    }

    if(linecount==4*parseInt(dominant[0])){
        
        console.log(points);
    }
});
