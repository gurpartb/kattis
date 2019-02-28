//
// SOULUTION ''NOT'' FINISHED :(
//

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// At index '0' val = 1, because any m^0 = 1
// index '1' vale = m, index '2' val = m^2 ...
let arr_powers = [1]

function build_arr_powers(m = 3,  n = 9){
    
    while(arr_powers[arr_powers.length - 1] <= n){
        arr_powers[arr_powers.length] = arr_powers[arr_powers.length - 1]*m;
    }

}

function marypartitions(m,n){
    build_arr_powers(m,n)
}


rl.on('line', line =>{

});

marypartitions(3, 47);
console.log(arr_powers)