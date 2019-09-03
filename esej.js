const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {

    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    esej(a,b);
});

function esej(a = 2, b = 7){

    let count = Math.ceil((a + b)/2);
    let code_a = 97;
    let code_z = 122;
    let arr = [];
    let code = code_a;
    let i = 0;
    let str = '';

    while(count){
        process.stdout.write(str+String.fromCharCode(code)+' ');
        code++;
        if(code>code_z){
            code = code_a;
            let j = i - 1;
            while(j>=0){
                if(arr[j]<code_z){
                    break;
                }
                arr[j] = code_a;
                j--;
            }
            if(j<0){
                arr.push(code_a)
                i++;
            }
            else {
                arr[j]++;
            }
            str = arr.map(x=>String.fromCharCode(x)).join('');
        }
        count--;
    }
}