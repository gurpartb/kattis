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

let kittenBranch;

rl.on('line', (line) => {

    if(!kittenBranch){

        // first line gives us the kitten branch
        kittenBranch = parseInt(line);
    }
    else {

        // we read all subtrees
        if(line === '-1'){

            let res = getPath(kittenBranch);
            console.log(...res);
            process.exit();
        }

        // Building the tree, read sub tree added to 
        let arr = line.split(' ').map( x => parseInt(x) );
        putTree(arr)
    }
});


const tree = {};

//
function putTree(subTree = [1,2,3]){

    // parent (or root node)
    let root = subTree[0];

    for(let i = 1; i < subTree.length; i++){

        // child (or leaf node)
        let leaf = subTree[i];
        tree[leaf] = root;
    }
}

function getPath(kittenBranch){

    let path = [];
    let root = kittenBranch;

    let i = 0;
    path[i] = root;
    root = tree[root];

    while( root !== undefined){

        i++;
        path[i] = root;
        root = tree[root];
    }

    return path;
}