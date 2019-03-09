
let str = '5 6 8 6 5'

console.log( str.split(' ').reduce((acc, n)=> acc + parseInt(n), 0))
