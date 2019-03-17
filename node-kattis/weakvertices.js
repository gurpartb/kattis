const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

var vertices = [];
let n, m;

rl.on('line', (line) => {

    if(!n){

        n = parseInt(line);
        m = n;

        for(let i = 0; i < m; i++){
            const children = [];
            vertices.push(children);
        }

    } else {

        let arr = line.split(' ');

        for(let i = m - n; i < m; i++){

            if(arr[i] === '1'){
                vertices[i].push(m - n);
                vertices[m - n].push(i);
            }
        }

        n -= 1;

        if(!n){

            for(let i = 0; i < m; i++){

                let hasTwoConnectedChildren = false;

                for(let j = 1; j < vertices[i].length; j++){

                    for(let k = 0; k < j; k++){

                        // if child is connected to the other child
                        if(vertices[vertices[i][j]].includes(vertices[i][k])){
                            hasTwoConnectedChildren = true;
                            break;
                        }
                    }

                    if(hasTwoConnectedChildren){
                        break;
                    }
                }

                if(!hasTwoConnectedChildren){
                    process.stdout.write(i+' ')
                }
            }
            vertices = [];
        }
    }
});