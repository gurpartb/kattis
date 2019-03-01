var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Cell(isAlive){
    this.alive = isAlive;
    this.visited = false;
}

// moves is an array of functions,
// intialized below the readline function
const moves = [];

function nextMove(i,j){
    for (const move of moves) {
        if(move(i,j)){
            return move(i,j);
        }
    }
}

const cells = []
let dim;
let line_count = 0;
rl.on('line', line =>{
    if(!dim){
        dim = line.split(' ').map( x => parseInt(x) );
    } else {
        line_count++;
        cells.push(line.split('').map(x =>{
            if(x === '#'){
                return new Cell(true);
            } else {
                return new Cell(false);
            }
        }));
    }

    if(line_count === dim[0]){
        main();
    }
});

function main(){
    let amoeba_count = 0;
    for(let i = 0; i < dim[0]; i++){
        for(let j = 0; j < dim[1]; j++){
            if(cells[i][j].alive){
                if(!cells[i][j].visited){
                    cells[i][j].visited = true;
                    let _i = i;
                    let _j = j;
                    while(nextMove(_i,_j)){
                        let arr = nextMove(_i,_j)
                        _i = arr[0];
                        _j = arr[1];
                        cells[_i][_j].visited = true;
                    }
                    amoeba_count++;
                }
            }
        }
    }
    console.log(amoeba_count)

}

//*** moves array is initialized with all legal moves ***/

function isValid(i , j){
    return 0 <= i && i < dim[0] && 0 <= j && j < dim[1] && cells[i][j].alive && !cells[i][j].visited;
}

// move ^ <
moves[0] = (i,j)=>{
    i--;
    j--;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move ^
moves[1] = (i,j)=>{
    i--;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move ^ >
moves[2] = (i,j)=>{
    i--;
    j++;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move >
moves[3] = (i,j)=>{
    j++;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move v >
moves[4] = (i,j)=>{
    i++;
    j++;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move v
moves[5] = (i,j)=>{
    i++;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move v <
moves[6] = (i,j)=>{
    i++;
    j--;
    if(isValid(i , j)){
        return [i, j];
    }
}

// move <
moves[7] = (i,j)=>{
    j--;
    if(isValid(i , j)){
        return [i, j];
    }
}
