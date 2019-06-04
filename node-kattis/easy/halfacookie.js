function height(x,y){

    return Math.sqrt( Math.pow(x,2) + Math.pow(y,2));
}

function base(_radius, _height){

    return 2*Math.sqrt(Math.pow(_radius,2) - Math.pow(_height,2));
}

function areaOfTriangle(_base,_height){

    return _base*_height/2;
}

function areaOfCircle(_radius, _theta = 2*Math.PI){

    return _theta * Math.pow(_radius,2) / 2;
}

// law of cosine
function theta(a,b,c){

    return Math.acos( (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2))/(2*a*b) )
}


function halfacookie(_radius = 10, x = 5, y = 0){

    const _height = height(x,y);

    if(_radius - _height < 0.001){

        console.log('miss');
        return;
    }

    const _base = base(_radius, _height);
    const _areaOfTriangle = areaOfTriangle(_base, _height);
    const _theta = theta(_radius, _radius, _base);
    const _areaOfCircle = areaOfCircle(_radius);
    const _areaOfArch = areaOfCircle(_radius, _theta);
    const _areaOfChord = _areaOfArch - _areaOfTriangle;
    const _areaOfBigPiece = _areaOfCircle - _areaOfChord;

    console.log(_areaOfBigPiece, _areaOfChord);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const arr = line.split(' ').map( x => parseFloat(x) );
    halfacookie(...arr)
});