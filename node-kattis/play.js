let n = 10
console.log(parseInt('1010', 2))

let bin = [];

while(n>0){
    (n%2)? bin.unshift(1) : bin.unshift(0);
    n = Math.floor(n/2)
}

console.log(parseInt(bin.reverse().join(''), 2))
