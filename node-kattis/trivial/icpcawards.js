const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n;
const rank = [];
const team = {};
const maxWinners = 12;

rl.on('line', (line) => {

    if(!n){
        
        n = line;
    }
    else {

        let arr = line.split(' ');

        if(rank.length < maxWinners){

            if(!team[arr[0]]){

                rank.push(arr[0]);
                team[arr[0]] = arr[1];
            }

        }
    }

});

process.stdin.on('end', () =>{
    
    rank.forEach( uni =>{
        console.log(uni, team[uni]);
    })
});