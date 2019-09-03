var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fly = '*';
const dash = '-';
const bar = '|';
const plus = '+';
const maxFlies = {'x':0, 'y':0, 'size':0, 'count':0};
const screenIn = [];
var length, rows, cols;

// given x, y intial and x, y final
// this function counts flies inside the rect.
function countFlies(xi, yi, xf, yf){
    let count = 0;
    for(let i = xi + 1; i < xf-1; i++ ){
        for(let j = yi + 1; j < yf-1; j++ ){
            if(screenIn[i][j] === fly){
                count++;
            }
        }
    }
    return count;
}

// updates maxFlies object with start coordinate (x,y)
// and the max fly count
function findMaxFlies(){
    // traverse the kill zone from left to right
    for(let i = 0; i <= rows - length; i++){
        for(let j = 0; j <= cols - length; j++){
            let flyCount = countFlies(i, j, i + length, j + length )
            if(flyCount > maxFlies['count']){
                maxFlies['x'] = i;
                maxFlies['y'] = j;
                maxFlies['count'] = flyCount;
            }
        }
    }
}

// add bars
function addBars(xi, xf, y){
    for(let i = xi+1 ; i < xf - 1; i++ ){
            screenIn[i][y] = bar;
    }
    screenIn[xi][y] = plus;
    screenIn[xf - 1][y] = plus;
}

// add dashes
function addDashes(yi, yf, x){
    for(let j = yi + 1 ; j < yf - 1; j++ ){
        screenIn[x][j] = dash;
    }
}

// use screenIn and maxFlies to buid screenOut
function buildScreenOut(){
    let xi = maxFlies['x'];
    let yi = maxFlies['y'];
    let xf = xi + maxFlies['size'];
    let yf = yi + maxFlies['size'];
    addBars(xi, xf, yi);
    addBars(xi, xf, yf - 1)
    addDashes(yi, yf, xi);
    addDashes(yi, yf, xf - 1);
}

// print screen
function printScreen(){
    console.log(maxFlies['count'])
    for(let i = 0; i < rows; i++){
        console.log(screenIn[i].join(''))
    }
}

// read all the lines and build screenIn matrix
var firstLine;
let row = 0;
rl.on('line', (line)=>{

    if(!firstLine){

        firstLine = line.split(' ').map(x=>parseInt(x));
        rows = firstLine[0];
        cols = firstLine[1];
        length = firstLine[2];
        maxFlies['size'] = firstLine[2];
    } else {
        screenIn[row++] = line.split('');
    }
    if(row == firstLine[0]){
        findMaxFlies();
        buildScreenOut();
        printScreen();
    }
});