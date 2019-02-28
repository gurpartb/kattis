var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

var dict = {
    '  *  *  *  *  *':1,
    '***  *****  ***':2,
    '***  ****  ****':3,
    '* ** ****  *  *':4,
    '****  ***  ****':5,
    '****  **** ****':6,
    '***  *  *  *  *':7,
    '**** ***** ****':8,
    '**** ****  ****':9,
    '**** ** ** ****':0
}


const arr = [];
let count = 0;
rl.on('line', line =>{

    if(arr.length === 0){

        for(let i = 0; i < (line.length+1)/4; i++){

            arr.push(['']);

        }
    }

    let index = 0;

    for(let i = 3; i <= line.length; i +=4){

        arr[index][0] = arr[index][0]+ line.substring(i - 3, i);

        index++;

    }
    
    count++;

    if(count === 5){
        
        let num_arr = [];

        for (const e of arr) {

            if(dict[e[0]] !== undefined){
                num_arr.push(dict[e[0]]);
            } else {
                console.log('BOOM!!');
                return;
            }
        }

        let num = parseInt(num_arr.join(''));

        console.log((num % 6) ? 'BOOM!!': 'BEER!!');
    }
});
