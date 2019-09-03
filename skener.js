const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

var first_line

rl.on('line', line => {

    if(!first_line){

        first_line = line.split(' ')

    } else {

        // read each char one at a time
        // expand it to c*Zc, repeat each char Zc times
        let out_put = ''

        for(e of line){

            for(i = 0; i < first_line[3]; i++){

                out_put += e
            }
        }

        for(i = 0; i < first_line[2]; i++){

            console.log(out_put)
        }
    }
})