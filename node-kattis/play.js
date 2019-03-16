let arr = [2,3,4,5]

arr.forEach( (e, i) =>{
    if(i%2)console.log(i, e)
    else arr[i] = i
})
console.log([2,3,4,5])
console.log(arr)