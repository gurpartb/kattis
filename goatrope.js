const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {

    let vectors = line.split(' ').map(x => parseFloat(x))

    console.log(minDis(...vectors))
})

// v1 and v2 are arrays ('vectors') of same size
function dis(v1, v2){

    let dis_square = 0

    for(let i = 0; i < v1.length; i++){

        dis_square += (v1[i]-v2[i])*(v1[i]-v2[i])
    }

    return Math.sqrt(dis_square)
}

function minDis(xg, yg, x1, y1, x2, y2){

    if(y1 <= yg && yg <= y2){

        return Math.min(dis([x1], [xg]), dis([x2], [xg]))
    }

    if(x1 <= xg && xg <= x2){

        return Math.min(dis([y1], [yg]), dis([y2], [yg]))
    }

    if(xg < x1){

        if(yg < y1){

            return dis([xg, yg], [x1, y1])
        }

        if(y2 < yg){

            return dis([xg, yg], [x1, y2])
        }
    }

    if(yg > y2){

        return dis([xg, yg], [x2, y2])
    }

    if(y1 > yg){

        return dis([xg, yg], [x2, y1])
    }
}

// console.log(minDis(...[7, 3, 0, 0, 5, 4] === 2))