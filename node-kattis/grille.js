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

// This functions checks if two grilles are unique and return a boolean value
function grilles_are_unique(grille, grille_rotated){

    for(let k = 0; k < grille.length; k++){

        if(grille_rotated[k] === hole && grille[k] === hole){
            
            return false;
        }
    }
    return true;
}

// given a grille and script this function decodes and return a message
// This message returns an empty string if grille is illegal
function decipher_message(grille, line){

    let message = [];
    let index = 0;

    // read message from all four directions
    for(let i = 0; i < 4; i++){

        for(let j = 0; j < grille.length; j++){

            if(grille[j] === hole){

                message[j] = line[index];
                index++;
            }
        }

        let grille_rotated = rotate_90_degree_clockwise(grille);

        if(!grilles_are_unique(grille, grille_rotated)){
            return '';
        }

        grille = grille_rotated;
    }

    return message.join('');
}

// If message is legal, this function prints out
// the message, else it prints out 'invalid grille'
function print_message(message, grille){

    if(message.length !== grille.length){

        console.log('invalid grille');
    } else {

        console.log(message);
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

            // build grille into a single line
            grille += line;

        } else {

            let message = decipher_message(grille, line);
            print_message(message, grille);
        }

        count++;
    }
});