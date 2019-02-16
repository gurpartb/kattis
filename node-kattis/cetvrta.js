var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function get_singleton(arr= [1,1,0]){
    if(arr[0]==arr[1]){
        return arr[2];
    } else if(arr[0]==arr[2]){
        return arr[1];
    } else {
        return arr[0];
    }
}

let x_column = [];
let y_column = [];
let line_count = 0;
rl.on('line', function(line){
    let coord = line.split(' ').map(x=>parseInt(x));
    line_count++;
    x_column.push(coord[0]);
    y_column.push(coord[1]);
    if(line_count==3){
        let x = get_singleton(x_column);
        let y = get_singleton(y_column);
        console.log(x,y);
    }
});