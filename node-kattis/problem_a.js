// Problem ID: cf42eac4a469037a

function print(grid){
    for (let index = 0; index < grid.length; index++) {

        const element = grid[index];
        console.log(element);
    }
}

function check(grid1, grid2){

    for(let i = 0; i < grid1.length; i++){

        for(let j = 0; j < grid1[i].length; j++){

            if(grid1[i][j] != grid2[i][j]){
                return false;
            }
        }
    }
    return true;
}

function flip(grid1, i, j){

    const black = '*';
    const white = '.';

    const color = grid1[i][j];

    if(color === black){

        grid1[i][j] = white;
    }
    else {

        grid1[i][j] = black;
    }
}

function flip_coord(grid, flips = [[]]){

    flips.forEach( x => flip(grid, ...x));
}

function click(i, j, min = 0, max = 2){

    const flips = []
    // current
    flips.push([i,j]);

    // north
    const i_n = i - 1;

    if(i_n >= min){

        flips.push([i_n,j]);
    }

    // east
    const j_e = j + 1;

    if(j_e <= max){

        flips.push([i,j_e]);
    }

    // south
    const i_s = i + 1;

    if(i_s <= max){

        flips.push([i_s,j]);
    }
    
    // west
    const j_w = j - 1;

    if(j_w >= min){

        flips.push([i,j_w]);
    }

    return flips;
}

function add_element(arr, max = 8){
    const arr2 = [];

    for(let i = arr[arr.length - 1] + 1; i <=8; i++ ){

        const arr3 = Array.from(arr);
        arr3.push(i);
        arr2.push(arr3);
    }

    return arr2;
}

function get_clicks(n, max = 8){
    
    let arr = [];

    for(let i = 0; i <= max; i++){

        const _arr = [i]
        arr.push(_arr);
    }

    for(let j = 1; j < n ; j++){

        const arr2 = [];
        arr.forEach( _arr =>{

            arr2.push(...add_element(_arr));
        });

        arr = arr2;
    }

    return arr;
}

const dict = { 0: [0,0], 1: [1,0], 2: [2,0], 3: [0,1], 4: [1,1], 5: [2,1], 6: [0,2], 7: [1,2], 8:[2,2] };
//const grid1 = [['*','*','*'], ['*','.','.'], ['.','.','*']];

function main(grid1){

    const white_grid = [['.','.','.'], ['.','.','.'], ['.','.','.']];

    if(check(grid1, white_grid)){

        return 0;
    }

    for(let n = 1; n <=9; n++){

        const clicks_arr = get_clicks(n);

        for(let i = 0; i < clicks_arr.length; i++){

            const grid2 = [['.','.','.'], ['.','.','.'], ['.','.','.']];
            const clicks = clicks_arr[i];
            const flips = [];

            clicks.forEach( _click =>{

                const coord = dict[_click];
                flips.push(...click(...coord));
            });

            flip_coord(grid2, flips);
            if(check(grid1, grid2)){

                return n;
            }
        
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count, line_number = 0;
const grid1 = [];
rl.on('line', (line) => {

    if(!count){

        count = parseInt(line);
    }
    else {

        grid1.push(line.split(''));

        line_number++;
        if(line_number === 3){
            line_number = 0;
            console.log(main(grid1));
            grid1.splice(0)
        }
    }
});
