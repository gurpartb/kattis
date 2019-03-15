const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n, k
let set = new Set()

rl.on('line', (line) => {

    if(!n){

        n = line

    } else {

        if(!k){

            k = parseInt(line)

        } else {

            set.add(line)
            k -= 1

            if(!k){

                console.log(set.size)
                set.clear()
            }
        }
    }
});