var arr = [1,1];

function fibonacci(n){
    // if(n === 0){
    //     return 1;
    // }
    // if(n === 1){
    //     return 1;
    // }
    if(n < arr.length){
        return arr[n]
    }

    const fib = fibonacci(n - 1) + fibonacci(n - 2)
    arr.push(fib)
    return arr[n]
}
// let n = 3
// let fib = fibonacci(n)
// console.log(`${n} : ${fib}`)

for(let n = 0; n <= 10; n++ ){
    let fib = fibonacci(n)
    console.log(`${n} : ${fib}`)
}

console.log(arr)