const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n, g, count = 0;

rl.on('line', (line) => {

    if(!n){

        n = line;
    }
    else if(!g){

        g = parseInt(line);
    }
    else{

        count++;
        let oddman = oddmanout(line);
        print(count, oddman);

        g = 0;
    }

});


Array.prototype.counter = function(){

    let obj = {}; 

    this.forEach( (el) =>{

        if(obj[el]){

            obj[el]++;
        }
        else {

            obj[el] = 1;
        }
    })

    return obj;
}


function oddmanout(str){

    let oddman;

    let obj = str.split(' ').counter();

    for(const key in obj){
        
        if(obj[key] === 1){

            oddman = key;
            break;
        }
    }

    return oddman;
}

function print(_case, oddman){
    
    console.log(`Case #${_case}: ${oddman}`)
}