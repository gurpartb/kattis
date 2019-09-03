const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
let map = []

rl.on('line', (line) => {
    if(!n){
        n = line;
    }else{
        if(!m){
            m = parseInt(line);
        }else{
            m -=1;
            let coord = line.split(' ').map(x=> parseFloat(x));
            coord.push(Infinity)
            map.push(coord);
            if(!m){
                let length = shortestSpan(map);
                console.log(length);
                map = [];
            }
        }
    }
});

function shortestSpan(map){
    let length = 0;
    let ssmap = [];
    let isle =  map[0]
    map.splice(0,1);
    ssmap.push(isle);
        for(let i = 0; i < ssmap.length; i++){
            let closestIsland = 0;
            for(let j = 0; j < map.length; j++){
                let dist = dis(ssmap[i], map[j]);
                if(dist < map[j][2]){
                    map[j][2] = dist;
                }
                if(map[j][2] < map[closestIsland][2]){
                    closestIsland = j;
                }
            }
            if(map.length){
                length += map[closestIsland][2];
                isle = map[closestIsland];
                map.splice(closestIsland,1);
                ssmap.push(isle);
            }
        }
    return length;
}

function dis(x1, x2){
    return Math.sqrt(
        (x1[0]-x2[0])*(x1[0]-x2[0])
        +(x1[1]-x2[1])*(x1[1]-x2[1])
    )
};