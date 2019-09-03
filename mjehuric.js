var readline = require('readline');

var rl = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
});

function isSorted(arr){

    let last = arr[0];

    for (const next of arr) {

        if(last > next){

            return false;
        }

        last = next;
    }
    return true;
}

function swap(arr, i , j){

    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function print(arr){

    arr.forEach(num =>rl.output.write(num.toString()+ ' '));
    console.log();
}

rl.on('line', line=>{

    let arr = line.split(' ').map(x => parseInt(x));

    while(!isSorted(arr)){

        for(let i = 1; i < arr.length; i++){

            if(arr[i - 1] > arr[i]){

                swap(arr, i - 1, i);
                print(arr);
            }
        }
    }
});