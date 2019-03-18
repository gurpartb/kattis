
let str = '0'
let num = ' '.charCodeAt(0) - 'a'.charCodeAt(0) + 6
let times = (num% 3 + 1)
        num = Math.floor(num/3)
        if(num === -20){
            num = 0
            times = 1
        }
        if(str[str.length - 1 ] == num){
            str += ' '
        }
        
        str += num
console.log(str)
