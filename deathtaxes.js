class Portfolio{

    constructor(){

        this.shares = 0;

        this.pricePerShare = 0;

        this.amountObtained = 0;
    }

    buy(shares, pricePerShare){

        this.pricePerShare = ( this.shares * this.pricePerShare + shares * pricePerShare ) 
                                / ( this.shares + shares );
        this.shares += shares;
    }

    sell(shares){

        this.shares -= shares;
    }

    split(x){

        this.shares = this.shares * x;
        this.pricePerShare = this.pricePerShare / x;
    }

    merge(x){

        this.shares = Math.floor( this.shares / x );
        this.pricePerShare = this.pricePerShare * x;
    }

    die(salePricePerShare, taxRate = 0.30){

        let profitPerShare = salePricePerShare - this.pricePerShare;

        if(profitPerShare < 0){

            taxRate = 0;
        }

        this.amountObtained = this.shares * ( salePricePerShare - profitPerShare * taxRate );

        this.sell(this.shares)
    }
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let portfolio = new Portfolio();

rl.on('line', (line) => {

    let arr = line.split(' ');

    if(arr.length === 2){

        portfolio[ arr[0] ]( parseInt(arr[1]) );
    }
    else if(arr.length === 3){

        portfolio[ arr[0] ]( parseInt(arr[1]) , parseInt(arr[2]) );
    }
    
});

process.stdin.on('end', ()=>{

    console.log(portfolio.amountObtained)
})