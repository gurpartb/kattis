const readline = require('readline');

const rl = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
});

let n
let k = 0
let set = new Set()

rl.on('line', (line) => {
    if(!n){

        n = line

    } else {

        if(!k){

            k = parseInt(line)

        } else {

            k -= 1
            set.add(line)

        }

        if(!k){

            console.log(set.size)
            set.clear()
        }
    }
});