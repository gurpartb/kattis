var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dict = {
    A:0,
    B:0,
    C:0
};

const comparator_int_ascending = (a,b) => a-b;

// this function excepts num array as parameter
// and return sorted array in ascending order
function sort_int(arr = [1, 2, 3]){

    return arr.sort(comparator_int_ascending);
}

function map_char_to_int(arr){

    let index = 0;

    for (const key in dict) {

        dict[key] = arr[index];
        index++;
    }
}

function print_dict(keys = ['A', 'B', 'C']){

    for (const key of keys) {

        process.stdout.write( dict[key].toString()+' ' );
    }
}

let sorted;
rl.on('line', line =>{

    if(!sorted){

        sorted = sort_int(line.split(' ').map( x => parseInt(x)));
        map_char_to_int(sorted);

    } else {

        print_dict(line.split(''));
    }
});