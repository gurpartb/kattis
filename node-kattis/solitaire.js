

// let arr = [
//     ['#','#','#','.','.','.','#','#','#'],
//     ['.','.','o','o','.','.','.','.','.'],
//     ['.','.','.','.','.','o','o','.','.'],
//     ['.','.','.','.','.','.','.','.','.'],
//     ['#','#','#','.','.','.','#','#','#']
// ];

// let arr = [['#','#','#','.','.','.','#','#','#'],
// ['.','.','o','o','.','o','.','.','.'],
// ['.','.','.','o','.','o','o','.','.'],
// ['.','.','.','o','o','.','.','.','.'],
// ['#','#','#','.','.','.','#','#','#']];

// let smallestPegCount = 0;
// let pegs = readPegs(arr);
// const set = new Set()
// doAllTheWork(pegs);
// console.log(smallestPegCount, pegs.length - smallestPegCount);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arr = []
var smallestPegCount;
var n;
var set = new Set()

rl.on('line', (line) => {

    if(!n){

        n = parseInt(line);

    } else {

        if(line === ''){
            n -= 1;

            let pegs = readPegs(arr);
            doAllTheWork(pegs);
            console.log(smallestPegCount, pegs.length - smallestPegCount);

            if(!n){
                return;
            }
            set = new Set();
            arr = [];
        }else{
            arr.push(line.split(''));
        }
    }
});

function readPegs(arr){
    // add all the pegs
    let pegs = []
    arr.forEach((el,i) => {
        el.forEach((fl,j) => {
            if(fl === 'o'){
                pegs.push([i,j].toString());
            }
        });
    });
    smallestPegCount = pegs.length;
    return pegs;
}

function doAllTheWork(pegs){
    if(set.has(pegs.toString())){
        return;
    }
    set.add(pegs.toString());
    if(smallestPegCount > pegs.length){
        smallestPegCount = pegs.length;
    }
    console.log(pegs)
    // make a deep copy of pegs
    let _pegs = Array.from(pegs);
    pegs.forEach(peg=>{
        hop(_pegs, peg);
    });
}

function hop(_pegs, peg){
    let dir = ['rl', 'du', 'lr', 'ud']
    dir.forEach(d=>{
        let pegadj = pegAdj(peg, d[0])
        if(_pegs.includes(pegadj)){
            let pegnew = pegAdj(pegadj, d[0]);
            let pegloc = pegInt(pegnew);
            if(pegloc[0] < arr.length
                && pegloc[1] < arr[0].length
                && pegloc[0] >= 0
                && pegloc[1] >= 0
                && arr[pegloc[0]][pegloc[1]] === '.'
                && !_pegs.includes(pegnew)){
                // remove the current peg
                _pegs = removePeg(_pegs, peg);
                // remove the hopped peg
                _pegs = removePeg(_pegs, pegadj);
                // add peg at new loc
                addPeg(_pegs, pegnew.toString());
                // do all the work
                doAllTheWork(_pegs.sort());
                // restore the original state
                _pegs = removePeg(_pegs, pegnew);
                addPeg(_pegs, pegadj);
                addPeg(_pegs, peg);
            }
        }
    })
}

function pegAdj(peg, c = null){
    let p = peg.split(',').map(x=> parseInt(x));
    if(c === 'r'){
        p[1] += 1;
        return p.toString();
    }
    if(c === 'd'){
        p[0] += 1;
        return p.toString();
    }
    if(c === 'l'){
        p[1] -= 1;
        return p.toString();
    }
    if(c === 'u'){
        p[0] -= 1;
        return p.toString();
    }
}

function pegInt(peg){
    return peg.split(',').map(x=> parseInt(x));
}

function removePeg(_pegs, peg){
    return _pegs.filter(x => x != peg);
}

function addPeg(_pegs, peg){
    _pegs.unshift(peg);
}