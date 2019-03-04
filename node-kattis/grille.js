var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 'str' length must n^2, where n is an natural number
function rotate_90_degree_clockwise(str = 'abcd'){
    let dim = Math.sqrt(str.length);
    let str2 = '';
    for(let i = 0; i < dim; i++){
        for(let j = 1; j <= dim; j++){
            str2 += str[(str.length - dim*j)+i];
        }
    }
    return str2;
}

function print_matrix(str){
    let dim = Math.sqrt(str.length);
    for(let i = 0; i < dim; i++){
        console.log(str.slice(i*dim, (i+1)*dim));
    }
}

let count = 0;
let n;
let grille = '';
let hole = '.';
rl.on('line', line =>{
    if(!n){
        n = parseInt(line);
    } else {
        if(count < n){
            grille += line;
        } else {
            let message = [];
            let index = 0;
            // read message from all four directions
            for(let i = 0; i < 4; i++){
                let hole_count = 0;
                for(let j = 0; j < grille.length; j++){
                    if(grille[j] === hole){
                        message[j] = line[index];
                        index++;
                        hole_count++;
                    }
                }
                let grille_rotated = rotate_90_degree_clockwise(grille);
                let isValid = true;;
                for(let k = 0; k < grille.length; k++){
                    if(grille_rotated[k] === hole && grille[k] === hole){
                        isValid = false;
                        break;
                    };
                }
                if(!isValid || hole_count*4 !== grille.length){
                    console.log('invalid grille');
                    return;
                }
                grille = grille_rotated;
            }
            console.log(message.join(''))
        }
        count++;
    }
});