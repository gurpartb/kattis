var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let moves = [];
let knight = 'k';
let arr = [];
let line_count = 0;
rl.on('line', line=>{

    arr.push(line);
    line_count++;

    if(line_count == 5){
        main();
    }
});

function isInRange(index){
    return 0 <= index && index <= 4;
}

function isNotKnight(i , j){
    return arr[i][j] !== knight;
}

moves[0] = function(i , j){
    i = i - 2;
    j = j + 1;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[1] = function(i , j){
    i = i - 1;
    j = j + 2;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[2] = function(i , j){
    i = i + 1;
    j = j + 2;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[3] = function(i, j){
    i = i + 2;
    j = j + 1;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[4] = function(i, j){
    i = i + 2;
    j = j - 1;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[5] = function(i, j){
    i = i + 1;
    j = j - 2;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[6] = function(i, j){
    i = i - 1;
    j = j - 2;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

moves[7] = function(i, j){
    i = i - 2;
    j = j - 1;
    if(isInRange(i) && isInRange(j)){
        return isNotKnight(i, j);
    }
    return true;
}

function isValid(i , j){
    for (const moveIsValid of moves) {
        if(!moveIsValid(i, j)) return false;
    }
    return true;
}

function main(){
    let knight_count = 0;
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(!isNotKnight(i,j)){
                knight_count++;
                if(!isValid(i,j)){
                    console.log('invalid');
                    return;
                }
            }
        }
    }
    console.log(knight_count === 9 ? 'valid': 'invalid');
}