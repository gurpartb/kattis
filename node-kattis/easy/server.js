function server(t, t_arr){

    let sum = 0;
    let count = 0;
    while(count < t_arr.length){

        if(sum + t_arr[count] > t){

            break;
        }
        sum += t_arr[count];
        count++;
    }

    return count;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr1;

rl.on('line', (line) => {
    if(!arr1){

        arr1 = line.split(' ').map( x => parseInt(x));
    }
    else {
        const arr2 = line.split(' ').map( x => parseInt(x));
        const count = server(arr1[1], arr2);
        console.log(count);
    }
});