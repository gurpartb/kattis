const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var rn
var rooms = []
rl.on('line', line =>{

    if(!rn){
        rn = line.split(' ').map(x => parseInt(x))
    } else {

        rooms.push(parseInt(line))
    }
})

process.stdin.on('end', ()=>{

    for(let i = 1; i <= rn[0]; i++){
        if(!rooms.includes(i)){
            console.log(i)
            return
        }
    }
    console.log('too late')

})