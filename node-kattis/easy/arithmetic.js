const obj = { 10: 'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};

function hex(num){

    if(num < 10){

        return num.toString();
    }

    return obj[num];
}

function octalToHex(line){

    const arr = line.split('').map( x => parseInt( x ) );
    let len = Math.ceil(arr.length*3/4);
    const hex_arr = new Array(len).fill(0)
    j = hex_arr.length - 1;

    let i = arr.length - 1;

    while(i >= 0){

        let e1 = arr[i];
        hex_arr[j] = e1;
        i--;

        if(i < 0){
            break;
        }

        let e2 = arr[i];
        i--;

        if(e2 % 2){

            hex_arr[j] = hex( hex_arr[j] + 8 );
        }
        j--;

        hex_arr[j] = ( parseInt( e2 / 2 ) );

        if(i < 0){
            break;
        }

        let e3 = arr[i];
        i--;

        hex_arr[j] = hex(hex_arr[j] + (e3%4)*4);
        j--;

        if(e3 >= 4){

            hex_arr[j] = 1;
        }

        if(i < 0){
            break;
        }

        let e4 = arr[i];
        i--;

        hex_arr[j] = hex(hex_arr[j] + e4*2);

        j--;
    }

    if(hex_arr.length > 1 && hex_arr[0] === 0){
       return hex_arr.slice(1)
    }

    return hex_arr;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const res = octalToHex(line);
    console.log(res.join(''));
});