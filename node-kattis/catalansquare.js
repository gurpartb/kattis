// unable to use it since BigInt is not supported
// Kattis uses node v 8.15
// I'll attempt this solution in python

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// C(n) is nth catalan number
// C(n) = C(n-1)C(0) + C(n-2)C(1) + ... + C(1)C(n-2) + C(0)C(n-1)

const mem_C = [1, 1]

function C(n){
    if(mem_C.length > n){
        return mem_C[n]
    }
    let sum = 0
    for(let i = 0; i < n; i++){
        sum += C(n-1-i)*C(i)
    }
    mem_C[n] = sum
    return mem_C[n]
}

// S(n) = sum, [ 0 <= k <= n ], C(k)C(n-k)

function S(n){

    return C(n + 1)
}

rl.on('line', (line) => {
    console.log(S(parseInt(line)))
});