const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var arr = line.split(' ')
    console.log(longSwaps(arr[0], parseInt(arr[1])))
});

function longSwaps(str = 'prognova' , k = 7){

    let y = 'Yes';
    let n = 'No';

    // regular sort is possible
    if(k <= str.length/2){
        return y;
    }

    let sortStr = str.split('').sort().join('');

    // string is already sorted we are done
    if(sortStr === str){
        return y;
    }

    // We are not allowed any swaps
    if( k >= str.length){
        return n;
    }

    let i = str.length - k;
    let partStr = str.substring(0, i) + str.substring(k);
    partStr = partStr.split('').sort().join('');
    partStr = partStr.substring(0, i) + str.substring(i,k) + partStr.substring(i);

    // sort is possible on the partitioned string
    if(sortStr === partStr){
        return y;
    }

    return n;
}

// * * * Tests * * *
// let y = 'Yes'
// let n = 'No'
// let k = 1
// console.log(longSwaps('cba', k) === y);
// k = 3
// console.log(longSwaps('abc', k) === y);
// k = 2
// console.log(longSwaps('cba', k) === y);
// console.log(longSwaps('bca', k) === n);
// console.log('Testing finished')