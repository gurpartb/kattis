function printArr(arr){

    let sum = 0

    arr.forEach( (el,i) =>{

        sum += el
        const str = `Make ${el} digit ${i}`;

        console.log(str)
    });

    let str1 = `In total ${sum} digit`

    if(sum > 1){

        str1 += 's'
    }
    console.log(str1)
}

function addDigitsToArr(arr, start, end = start, delta = 1){
    let i = start
    while(i <= end){

        const arr1 = i.toString().split('').map( x => parseInt(x) )
        arr1.forEach( el =>{

            arr[el]++;
        })

        i += delta;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
});

let n, street, addresses, arr;
rl.on('line', (line) => {
    if(!n){

        n = line
    } else if(!street){

        street = line;
    }
    else if(!addresses){

        addresses = line;
        arr = new Array(10).fill(0)
    }
    else{

        let arr1 = line.split(' ')

        if(arr1[0] === '+'){

            arr1.shift()
        }
        if(parseInt(arr1[0])){

            arr1 = arr1.map( x => parseInt(x))
            addDigitsToArr(arr, ...arr1)
        }
        else{

            console.log(street)
            console.log(addresses)
            printArr(arr)

            street = line
            addresses = undefined
        }
    }
});

process.stdin.on('end', ()=>{

    console.log(street)
    console.log(addresses)
    printArr(arr)
})