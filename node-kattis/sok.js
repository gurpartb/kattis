var readline = require('readline')

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

function all_positive(arr = [1, 2, 3]){

    for (const e of arr) {

        if(e < 0){

            return false
        }
    }

    return true
}

let juice_available

rl.on('line', line =>{

    if(!juice_available){

        juice_available = line.split(' ').map(x => parseFloat(x))

    } else {

        let juice_parts_cocktail = line.split(' ').map(x => parseFloat(x))

        let cocktail_sum = juice_parts_cocktail.reduce((acc, n) => acc + n, 0)

        let juice_ratio_cocktail = juice_parts_cocktail.map(x => x/cocktail_sum)

        let cocktail_sum_juice_available = juice_ratio_cocktail.map((x, i) => 1/x*juice_available[i])

        let juice_needed_zero = juice_ratio_cocktail.map(x => x*cocktail_sum_juice_available[0])
        let juice_needed_one = juice_ratio_cocktail.map(x => x*cocktail_sum_juice_available[1])
        let juice_needed_two = juice_ratio_cocktail.map(x => x*cocktail_sum_juice_available[2])

        let juice_difference_zero = juice_needed_zero.map((x,i) => juice_available[i] - x)
        let juice_difference_one = juice_needed_one.map((x,i) => juice_available[i] - x)
        let juice_difference_two = juice_needed_two.map((x,i) => juice_available[i] - x)

        let smallest_legal_arr

        if(all_positive(juice_difference_zero)){

            smallest_legal_arr = juice_difference_zero
        }

        if(all_positive(juice_difference_one)){

            if(!smallest_legal_arr){

                smallest_legal_arr = juice_difference_one

            } else if( smallest_legal_arr.reduce((acc, n)=> acc+n,0) > juice_difference_one.reduce((acc, n)=> acc+n,0)){

                smallest_legal_arr = juice_difference_one
            }
        }

        if(all_positive(juice_difference_two)){

            if(!smallest_legal_arr){

                smallest_legal_arr = juice_difference_two

            }else if( smallest_legal_arr.reduce((acc, n)=> acc+n,0) > juice_difference_two.reduce((acc, n)=> acc+n,0)){

                smallest_legal_arr = juice_difference_two
            }
        }

        let message = smallest_legal_arr.join(' ')

        console.log(message)
    }
})