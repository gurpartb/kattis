

let arr = [ 1, 2, 3]
let front_pos = 0;
while(front_pos < arr.length){
    console.log(arr)
    // get the last element
    let last = arr.pop()
    // stick the last ement to the front
    arr.unshift(last)

    front_pos++;
}
console.log(arr)
