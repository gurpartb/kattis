const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstLine, m;
rl.on('line', (line) => {

    if(!firstLine){

        firstLine = line
    } 
    else if(!m){

        m = parseInt(line.split(' ')[1])
    }else{

        let arr = line.split(' ').map( x => parseInt(x) );
        let res = maxSubArraySum(arr, m);
        console.log(res);
        m = 0;
    }
});
    

function subArraySum(i, j, arr = [1, 2, 3]){

    let sum = 0;

    for(let k = i; k < j; k++){
        sum += arr[k];
    }
    return sum;
}

function nextMindex(m, currentMindex, arr){

    let i = currentMindex + 1;

    while( i < arr.length ){

        if( arr[i] === m ){
            return i;
        }
        i++;
    }

    return arr.length;
}

function maxSubArraySum(arr, m){
    let prevMindex = -1;
    let currentMindex = 0;
    let nextIndex = 0;
    let sum = 0;

    while(nextIndex < arr.length){

        nextIndex = nextMindex(m, currentMindex, arr);

        sum = Math.max( sum , subArraySum( prevMindex + 1 , nextIndex , arr ) );

        prevMindex = currentMindex;
        currentMindex = nextIndex;
    }
    return sum;
}

// let arr = [1, 3, 2, 6, 2, 4];
// let m = 2;
// maxSubArraySum(arr, m)