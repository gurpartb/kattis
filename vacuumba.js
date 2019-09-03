class Vacuumba{

    constructor(dir = 0, x = 0, y = 0){

        this.dir = dir;
        this.x = x;
        this.y = y;
    }

    magnitude(num){

        return Math.abs(num);
    }

    trueMod(num, modulus){

        const res = ( ( num%modulus ) + modulus ) % modulus;
        return res;
    }

    getRadians(){

        const degreeInCircle = 360;
        const radianInCircle = 2 * Math.PI;
        const radians = this.dir * radianInCircle / degreeInCircle;

        return radians;
    }

    step(dir, dis){

        this.setDir(dir, dis);
        this.dx(dis);
        this.dy(dis);
    }

    setDir(dir , dis){

        const _dir = this.dir + ((dis >= 0)? dir : dir - 180);
        const degreeInCircle = 360;

        this.dir = this.trueMod( _dir, degreeInCircle );
    }

    dxSign(){

        const _degree = this.dir;

        return (_degree >= 180)? 1: -1;
    }

    dySign(){

        const _degree = this.dir;

        return (_degree < 90)? 1: (_degree > 270)? 1: -1;
    }

    dx(dis){

        const _radians = this.getRadians();
        const _dx = this.magnitude( Math.sin( _radians ) * dis ) * this.dxSign();

        this.x = this.x + _dx
    }

    dy(dis){

        const _radians = this.getRadians();
        const _dy = this.magnitude( Math.cos( _radians ) * dis ) * this.dySign();

        this.y = this.y + _dy;
    }
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n, m, vac;

rl.on('line', (line) => {

    if(!n){

        n = line;
    }
    else if(!m){

        m = parseInt(line);
        vac = new Vacuumba();
    }
    else {

        const arr = line.split(' ').map( x => parseFloat(x));
        vac.step(...arr);

        m--;

        if(!m){

            console.log( vac.x.toFixed(6), vac.y.toFixed(6) )
        }
    }
});
    