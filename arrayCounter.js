Array.prototype.counter = function(){

    let obj = {}; 

    this.forEach( (el) =>{

        if(obj[el]){

            obj[el]++;
        }
        else {

            obj[el] = 1;
        }
    })

    return obj;
}

let arr = 'aaaaabc'.split('')
let obj = arr.counter();
let obj1 = Object.values(obj).counter();
console.log(obj1, obj)
