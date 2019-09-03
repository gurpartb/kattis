var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

function Node(){

    this.neighbors = [];
    this.squawk = [0];
}

function build_nodes(n){

    while(n > 0){

        nodes.push(new Node());
        n--;
    }
}

function build_link(i, j){

    nodes[i].neighbors.push(j);
    nodes[j].neighbors.push(i);
}

function sum_neighbors_squawks(i, ti){

    let squawks = 0;

    for (const neigh of nodes[i].neighbors) {

        squawks += nodes[neigh].squawk[ti];
    }

    return squawks;
}

// *** keep failing the last test on kattis   *** //
// *** my hunch is due to ineger overflow     *** //
// *** similar code in my python folder works *** //
const nodes = [];
let nmst;
let links_completed = 0;

rl.on('line', line =>{

    if(!nmst){

        nmst = line.split(' ').map(x => parseInt(x));
        build_nodes(nmst[0]);
    } else {

        let link = line.split(' ').map(x => parseInt(x));
        build_link(link[0], link[1]);
        links_completed++;

        if(links_completed === nmst[1]){

            // infect user at time zero
            nodes[nmst[2]].squawk[0] = 1;

            // update squawk for t minutes
            for(ti = 1; ti <= nmst[3]; ti++){

                // iterate through each user and update squawk at ti
                for (let i = 0; i < nodes.length; i++) {

                    nodes[i].squawk.push(sum_neighbors_squawks(i, ti - 1));
                }
            }

            let sum = 0;

            // count all squawks at tf
            for (const node of nodes) {

                sum += node.squawk[nmst[3]];
            }

            console.log(sum);
        }
    }
});