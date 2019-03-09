// * * * time limit exceeded *** //

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var sizes = [0]
const hash = '#'
const dot = '.'
var tot_lines = 0
var first_line = true

rl.on('line', line =>{

    if(tot_lines === 0){

        tot_lines = parseInt(line)

        if(!first_line && tot_lines !== 0){
            process.stdout.write('\n')
        }
        first_line = false

    } else {

        tot_lines--
        let arr = line.split(' ')
        let pixel = arr.shift()
        let pixel_count = 0

        arr.forEach( x =>{
            for(let i = 0; i < parseInt(x); i++){
                process.stdout.write(pixel)
                pixel_count++
            }
            if(pixel === hash){
                pixel = dot
            } else {
                pixel = hash
            }
        })

        process.stdout.write('\n')

        if(sizes.length < 3 && sizes[sizes.length - 1] !== pixel_count){

            sizes.push(pixel_count)
        }

        if(tot_lines === 0){
            if(sizes.length > 2){
                console.log('Error decoding image')
            }
            sizes = [0]
        }
    }
})
