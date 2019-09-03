function outString(num, length){

    const str = `Case #${num}: ${length}`;
    console.log(str);
}

function separateNumAndLastChar(str){

    const chr = str[str.length -1];
    const num = parseInt(str.slice(0,-1))

    return [num, chr];
}

function doSomething(line = '5B'){

    const dict = {}
    const arr = line.split(' ');

    arr.forEach( x => {

        const arr2 = separateNumAndLastChar(x);

        if(dict[arr2[1]]){

            dict[arr2[1]].push(arr2[0])
        }
        else {

            dict[arr2[1]] = [arr2[0]]
        }
    });

    return dict;
}

function zip(arr1, arr2){
    let i = 0, j = 0;
    const smallDouble = Math.min(arr1.length, arr2.length) * 2;
    const arr = new Array(smallDouble )
    
    while(arr1[i] && arr2[i]){
        arr[j] = arr1[i];
        j++;
        arr[j] = arr2[i];
        j++;
        i++;
    }

    return arr;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n, m, count = 0;
rl.on('line', (line) => {
    if(!n){

        n = parseInt(line);
    }
    else if(!m){

        count++;
        m = parseInt(line);
    }
    else {

        const dict = doSomething(line);

        const arrR = dict['R'];
        const arrB = dict['B'];

        if(!arrR || ! arrB){

            outString(count, 0)
        }
        else {

            arrR.sort( (a,b) => b-a);
            arrB.sort( (a,b) => b-a);

            const arr = zip(arrR, arrB)
            const length = arr.reduce( (a,b) => a+b) - arr.length;
            outString(count, length);
        }
        m = 0;
    }
});