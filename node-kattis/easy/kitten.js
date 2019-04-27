// solving the problem
// 1. build path array, set arr[0] to kitten branch
// 2. find parent of the last element in the arr
//      2.1 if parent exist store it at end of array
//          else you are done

// building the tree
// This problem we only need to work from child to parent
// we can simply use a dictionary where child is key and parent is val

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let child;

rl.on('line', (line) => {

    if(!child){

        child = parseInt(line);
    }
    else {

        if(line === '-1'){

            let res = getRoot(child);
            console.log(...res);
            process.exit();
        }

        let arr = line.split(' ').map( x => parseInt(x) );

        postTree(arr)
    }
});


const dict = {};

function postTree(arr = [1,2,3]){

    // parent (or root node)
    let val = arr[0];

    for(let i = 1; i < arr.length; i++){

        // child (or leaf node)
        let key = arr[i];
        dict[key] = val;
    }
}

function getRoot(child){

    let path = [child];
    let i = 0;

    while( dict[ path [i] ] !== undefined){

        path[i + 1] = dict[ path[i] ];
        i++;
    }

    return path;
}