function simpleAddition(strA, strB){

    let arrA = strA.split('').map( x => parseInt(x) );
    let arrB = strB.split('').map( x => parseInt(x) );

    let base = 10;
    let carry = 0;

    let sumArr = new Array(Math.max(strA.length, strB.length));

    for(let i = 1; i <= sumArr.length; i++){

        let a = 0, b = 0;

        if(arrA.length - i >= 0){

            a = arrA[arrA.length - i];
        }

        if(arrB.length - i >= 0){

            b = arrB[arrB.length - i];
        }

        let sum = a + b + carry;

        if(sum >= base){

            carry = 1;

        }else{

            carry = 0;
        }

        let str = sum.toString()

        sumArr[ sumArr.length - i ] = str[sum.toString().length - 1];

    }

    if(carry){
        
        sumArr.unshift(carry);
    }

    return sumArr.join('')
}