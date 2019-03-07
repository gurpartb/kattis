const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let word_arr = []
const SET = 'SET'
let set_count = 1
let word_count = 0

rl.on('line', line =>{

    if(word_count === 0){

        word_count = parseInt(line)

    }else{

        word_arr.push(line)
        word_count -= 1

        if(word_count === 0){

            console.log(SET, set_count++)

            for(let i = 0; i < word_arr.length; i++){

                if(i % 2 === 0){

                    console.log(word_arr[i])
                }
            }

            for(let i = word_arr.length - 1 ; i >= 0; i--){

                if(i % 2 === 1){

                    console.log(word_arr[i])
                }
            }

            word_arr = []
        }
    }

});