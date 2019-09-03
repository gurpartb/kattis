class Stack{
    constructor(){this.data = []}
    insert(x){this.data.push(x)}
    remove(){return this.data.pop()}
}

class Queue{
    constructor(){this.data = []}
    insert(x){this.data.push(x)}
    remove(){return this.data.shift()}
}

class PriorityQueue{

    constructor(){this.data =[]}
    insert(x){this.data.push(x)}
    remove(){

        let maxIndex = 0;

        this.data.forEach( (el, i) =>{

            if(el > this.data[maxIndex]){

                maxIndex = i;
            }
        });

        const arr = this.data.splice(maxIndex,1);
        return arr.pop()
    }
    
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let isStack, isQ, isPQ;
let stack, q, pq;
const insert = 1;
rl.on('line', (line) => {
    
    if(!n){

        n = parseInt(line);
        isStack = true;
        isQ = true;
        isPQ = true;
        stack = new Stack();
        q = new Queue();
        pq = new PriorityQueue();
    }
    else {

        const cmd_el = line.split(' ').map( x => parseInt(x) );

        const el = cmd_el[1];

        if(cmd_el[0] === insert){
            if(isStack){stack.insert(el)}
            if(isQ){q.insert(el)}
            if(isPQ){pq.insert(el)}
        }
        else{

            if(isStack){isStack = (el === stack.remove())}
            if(isQ){isQ = (el === q.remove())}
            if(isPQ){isPQ = (el === pq.remove())}
        }
        n--
        if(!n){
            if(isStack && isQ || isStack && isPQ || isQ && isPQ)
                console.log('not sure');
            else 
                if(isStack)console.log('stack')
                else if(isQ)console.log('queue')
                else if(isPQ)console.log('priority queue')
                else console.log('impossible')
        }
    }
});