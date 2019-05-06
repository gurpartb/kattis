const backSlash = '\\';
const forwardSlash = '/';

let move = { }

// move north
move.north = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    i--;

    // loop till you find exit
    while( i > 0 ){

        const char = map[i][j];

        // found / forward slash, move east
        if(char === forwardSlash){

            return move.east(map, i, j);
        }
        // found \ back slash move west
        if(char === backSlash){

            return move.west(map, i, j);
        }

        i--;
    }

    return [0, j];
}

move.south = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    i++;

    // loop till you find exit
    while( i < map.length ){

        const char = map[i][j];

        // found / forward slash, move west
        if(char === forwardSlash){

            return move.west(map, i, j);
        }
        // found \ back slash, move east
        if(char === backSlash){

            return move.east(map, i, j);
        }

        i++;
    }

    return [map.length, j];
}

move.east = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    j++;

    // loop till you find exit
    while( j < map[i].length ){

        const char = map[i][j];
        // found --> / forward slash, move north
        if(char === forwardSlash){

            move.north(map, i, j);
        }
        // found --> \ back slash move south
        if(char === backSlash){

            move.south(map, i, j);
        }

        j++;
    }

    return [i, map[i].length];
}

move.west = function(map = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], i, j){

    // loop till you find exit
    while( j > 0){

        const char = map[i][j];

        // found / forward slash, move east
        if(char === forwardSlash){

        }
        // found \ back slash move west
        if(char === backSlash){

        }

        j--;
    }

    return [i, 0];
}