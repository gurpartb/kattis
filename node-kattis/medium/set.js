class _Card{

    constructor(id, line){

        const arr = line.split('');
        this.id = id;
        this.count = arr[0]
        this.shape = arr[1];
        this.shade = arr[2];
        this.color = arr[3];
    }
}

class _Set{

    constructor(){

        this.cards = new Set();
        this.count = new Set();
        this.shape = new Set();
        this.shade = new Set();
        this.color = new Set();
    }

    add(card){

        this.cards.add(card.id);
        this.count.add(card.count);
        this.shape.add(card.shape);
        this.shade.add(card.shade);
        this.color.add(card.color);
    }

    isValid(){

        let valid = true;
        if(this.cards.size === 2)
            valid = false;
        if(this.count.size === 2)
            valid = false;
        if(this.shape.size === 2)
            valid = false;
        if(this.shade.size === 2)
            valid = false;
        if(this.color.size === 2)
            valid = false;
        return valid;
    }
}

function main(data){

    const card_arr = [];
    const valid_set_arr = [];

    let count = 1;

    data.forEach( x =>{

        card_arr.push(new _Card(count, x));
        count++;
    });

    for(let i = 0; i < 10; i++){
        for(let j = i + 1; j < 11; j++){
            for(let k = j + 1; k < 12; k++){

                const set = new _Set();

                set.add(card_arr[i]);
                set.add(card_arr[j]);
                set.add(card_arr[k]);

                if(set.isValid()){

                    valid_set_arr.push([i+1,j+1,k+1]);
                }
            }
        }
    }

    if(valid_set_arr.length > 0){

        valid_set_arr.forEach( x =>{
            
            console.log(...x);
        });
    }
    else {

        console.log('no sets');
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
});

const data = [];

rl.on('line', (line) => {

    line.split(' ').forEach( x => {

        data.push(x);
    });
});

process.on('exit', () => {
    
    main(data);
});

