var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

Math.radians = function(degrees){
    return degrees*Math.PI/180;
}

Math.degrees = function(radians){
    return radians*180/Math.PI;
}

const time = function(v0, theta, x1){
    return x1/(v0*Math.cos(Math.radians(theta)));
}

const height = function(v0, theta, t1){
    let g = 9.81;
    return v0*t1*Math.sin(Math.radians(theta))-g*t1*t1/2;
}

const print = function(...args){
    console.log(...args);
}

let first_line;
rl.on('line', line =>{
    if(!first_line){
        first_line = line;
    }else{
        let arr = line.split(' ').map(x=>parseFloat(x));
        let v0 = arr[0]; let theta = arr[1]; let x1 = arr[2];
        let h1 = arr[3]; let h2 = arr[4];
        let t1 = time(v0, theta, x1);
        let y1 = height(v0, theta, t1);
        if(y1-h1>=1 && h2-y1>=1){
            print('Safe');
        }else{
            print('Not Safe');
        }
    }
})
