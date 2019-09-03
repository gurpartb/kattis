const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    // moquitos, <- (pupae / s), <- (larve/r), <- (m * eggs laid per mosquitos)
    // r-th larva survives,  s-th pupae survives, n transformations
    var mplersn = line.split(' ').map(
        x=>parseInt(x)
    );

    while(mplersn[6] > 0){
        let m = mplersn[0];
        mplersn[0] = Math.floor(mplersn[1]/mplersn[5]);
        mplersn[1] = Math.floor(mplersn[2]/mplersn[4]);
        mplersn[2] = m*mplersn[3]
        mplersn[6] -= 1;
    }
    console.log(mplersn[0]);
});