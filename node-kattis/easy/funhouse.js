const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const backSlash = '\\';
const forwardSlash = '/';
const asterisk = '*';
const and = '&';
const move = { }

let map = []
let width_height;
let rows = 0;
let houseCount = 0;

rl.on('line', (line) => {

    if(!width_height){

        width_height = line.split(' ').map( x => parseInt(x) );
    }
    else {

        map.push(line.split(''));
        rows++;

        if(rows === width_height[1]){
            
            rows = 0;
            width_height = undefined;
            houseCount++;

            // find entrance
            let coord = findEntrance(map, asterisk);

            // find initial direction
            let dir = getDirection(map, coord);

            let coord_dir = [...coord, dir];

            do{

                coord_dir = move[coord_dir[2]](map, coord_dir[0], coord_dir[1]);

            }while(coord_dir[2] != 'end')

            map[coord_dir[0]][coord_dir[1]] = and;

            console.log('HOUSE', houseCount);

            // print map
            printMap(map);

            map = [];
        }
    }
});

function printMap(map = []){
    map.forEach( row =>{

        console.log(row.join(''));
    })
}


// find initial direction
function getDirection(map, coord){

    if(coord[0] === 0){

        return 'south';
    }

    if(coord[0] === map.length - 1){

        return 'north';
    }

    if(coord[1] === 0){

        return 'east';
    }

    return 'west';
}


// find where the front door is
function findEntrance(map = [], door){

    for(let i = 0; i < map.length; i++){

        for(let j = 0; j < map[i].length; j++){

            if(map[i][j] === door){

                return [i,j];
            }
        }
    }
}

// move north
move.north = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){
    
    i--;

    // loop till you find exit
    while( i > 0 ){

        const char = map[i][j];

        // found / forward slash, move east
        if(char === forwardSlash){

            return [i, j, 'east'];
        }
        // found \ back slash move west
        if(char == backSlash){


            return [i, j, 'west'];
        }

        i--;
    }

    return [i, j, 'end'];
}

move.south = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    i++;

    // loop till you find exit
    while( i < map.length ){

        const char = map[i][j];

        // found / forward slash, move west
        if(char === forwardSlash){

            return [i, j, 'west'];
        }
        // found \ back slash, move east
        if(char === backSlash){

            return [i, j, 'east'];
        }

        i++;
    }

    return [i - 1, j, 'end'];
}

move.east = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    j++;

    // loop till you find exit
    while( j < map[i].length ){

        const char = map[i][j];
        // found --> / forward slash, move north
        if(char === forwardSlash){

            return [i, j, 'north'];
        }
        // found --> \ back slash move south
        if(char === backSlash){

            return [i, j, 'south'];
        }

        j++;
    }

    return [i, j - 1, 'end'];
}

move.west = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    j--;

    // loop till you find exit
    while( j > 0){

        const char = map[i][j];

        // found / forward slash, move north
        if(char === forwardSlash){

            return [i, j, 'south'];
        }
        // found \ back slash move west
        if(char === backSlash){

            return [i, j, 'north'];
        }

        j--;
    }

    return [i, j, 'end'];
}