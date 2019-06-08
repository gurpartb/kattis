function isFlipped(str1, str2){

    for(let i = 0; i < str1.length; i++){

        if(str1[i] === str2[i]){

            return false;
        }
    }
    return true;
}

function isSame(str1, str2){

    for(let i = 0; i < str1.length; i++){

        if(str1[i] != str2[i]){

            return false;
        }
    }
    return true;
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n, str1, str2;
rl.on('line', (line) => {
    
    if(!n){

        n = parseInt(line);
    }
    else if(!str1){

        str1 = line;
    }
    else {

        str2 = line;
    
        if(n % 2){

            if(isFlipped(str1, str2)){
        
                console.log('Deletion succeeded');
            } 
            else {
        
                console.log('Deletion failed');
            }
        }
        else {
        
            if(isSame(str1, str2)){
        
                console.log('Deletion succeeded');
            } 
            else {
        
                console.log('Deletion failed');
            }
        }
    }
});