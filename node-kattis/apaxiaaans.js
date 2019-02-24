var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Removes all concecutive occurences of characters
const reducer = (str, x)=>str+((x!=str[str.length-1])? x : '');

rl.on('line', line=>{
    let arr = line.split('');
    //console.log(arr);
    let str = arr.reduce(reducer);
    console.log(str);
})