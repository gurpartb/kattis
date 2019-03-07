const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [];
let count = 1
let elements = 0

rl.on('line', line =>{
    if(elements === 0){

        elements = parseInt(line)

    }else{

        arr.push(line)
        elements -= 1

        if(elements === 0){

            console.log('SET', count++)

            for(let i = 0; i < arr.length; i += 1){
                if(i % 2 === 0){
                    console.log(arr[i])
                }

            }
            for(let i = arr.length - 1 ; i >= 0; i -= 1){
                if(i % 2 === 1){
                    console.log(arr[i])
                }
            }
            
            arr = []
        }
    }

});