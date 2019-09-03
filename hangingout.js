const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let limit_events, terrace;

rl.on('line', (line) => {
    if(!limit_events){

        limit_events = line.split(' ').map( x => parseInt(x));
        terrace = new Terrace(limit_events[0]);

    } else {

        let arr = line.split(' ');
        terrace[arr[0]](parseInt(arr[1]));
    }
});

process.stdin.on('end', ()=>{
    console.log(terrace.groupsDenied);
})

class Terrace{

    constructor(_limit){
        
        this.limit = _limit;
        this.count = 0;
        this.groupsDenied = 0;
    }

    leave(p){

        this.count -= p;
    }

    enter(p){

        if(this.count + p <= this.limit){

            this.count += p;

        } else {

            this.groupsDenied++;
        }
    }
}


