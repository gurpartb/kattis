const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

const arr = []
const max_num = 9

rl.on('line', line =>{

    arr.push(line.split(' ').map(x => parseInt(x)))
})

process.stdin.on('end', function() {
    
    const indices = []
    for(let i = 1; i <= max_num; i++){
        indices.push(get_index(i))
    }
     
    let dis = 0
     
    for(let i = 1; i < indices.length; i++){
         
        let sub_dis = distance(indices[i-1], indices[i])
        dis += sub_dis
    }
    
    console.log(dis)
});

function get_index(num){
    
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){

            if(arr[i][j] === num){
                
                return [i, j]
            }
        }
    }
}

function distance( p1, p2){

    return Math.sqrt( Math.pow( p1[0]-p2[0] , 2 ) + Math.pow( p1[1]-p2[1] , 2 ) )
}