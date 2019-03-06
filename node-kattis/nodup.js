var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', line=> {
    let dict = {}
    line.split(' ').forEach(word=> {
        (dict[word] >= 0) ? dict[word] +=1 : dict[word] = 0;
    });
    let message;
    // console.log(dict)
    for (const key in dict) {
        if(dict[key] > 0){
            message = 'no'
        }
    }
    console.log( message || 'yes')
})