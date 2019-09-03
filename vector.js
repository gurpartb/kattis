// unable to use it since BigInt is not supported
// Kattis uses node v 8.15
// I'll attempt this solution in python

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    let vectors = line.split(' ').map(x => parseFloat(x))
    console.log(minDis(...vectors))
})

// p1 and p2 are arrays ('vectors') of same size
function dis(v1, v2){
    let dis_square = 0
    for(let i = 0; i < v1.length; i++){
        dis_square += (v1[i]-v2[i])*(v1[i]-v2[i])
    }
    return Math.sqrt(dis_square)
}

// equation of line y = mx + b
function minDis(xg, yg, x1, y1, x2, y2){
    // 1. slope of equation joining (x1, y1) and (x2, y2)
    let m12 = (x2 - x1) / (y2 - y1)
    // 2. b of equation joining (x1, y1) and (x2, y2)
    let b12 = -m12 * x2 + y2
    // Let m be the point, on a line perpendicular to (x1, y1) and (x2, y2)
    // that goes through (xg, yg)
    // 3. slope of equation joining (xg, yg) and (xm, ym)
    let mgm = -(1 / m12)
    // 4. b of equation joining (xg, yg) and (xm, ym)
    let bgm = -mgm * xg + yg
    // 5. x of point m
    let xm = (bgm - b12)/(m12 - mgm)
    // 6. y of point m
    let ym = mgm * xm + bgm
    // 7. check to see if p1 < m < p2
    console.log(dis([xm, ym], [xg, yg]))
    if(x1 < xm && xm < x2 && y1 < ym && ym < y2){
        return dis([xm, ym], [xg, yg])
    } else {
        return Math.min(dis([x1, y1], [xg, yg]), dis([x2, y2], [xg, yg]))
    }
}