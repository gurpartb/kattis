
// * * * DOESN'T  WORK * * * //
// WORK IN PROGRESS

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr
let first_line
const birth_year = 2000
const months_in_year = 12

var set
var smallest

rl.on('line', line =>{
    if(!first_line){
        first_line = line
    } else {
        set = new Set()
        smallest = 99999999
        let line_arr = line.split('')
        line_arr = line_arr.filter(x => x !== ' ');
        arr = line_arr.map(i => parseInt(i))
        main()
    }

})

const days_in_month = {
    1: 31,
    2: { leap: 29, regular: 28 },
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

function main( ){
    run_permutations()
    let d = smallest.toString().substr(6,2)
    let m = smallest.toString().substr(4,2)
    let y = smallest.toString().substr(0,4)
    let s = set.size.toString()

    let message = set.size ? set.size.toString()+ ' ' + d + ' ' + m + ' ' + y : 0;
    console.log(message)
}

// * * * run all permutations * * //

function run_permutations(){
    // cycle through array, store current ordering, and update smallest date
    // cycle_and_store()
    for(let i = 6; i >= 0; i--){
        switch_(i, 7)
        for(let j = 5; j >= 0; j--){
            switch_(j, 6)
            for(let k = 4; k >= 0; k--){
                switch_(k, 5)
                for(let l = 3; l >= 0; l--){
                    switch_(l, 4)
                    for(let m = 2; m >= 0; m--){
                        switch_(m, 3)
                        for(let n = 1; n >= 0; n--){
                            switch_(n, 2)
                            for(let p = 0; p >= 0; p--){
                                switch_(p, 1)
                            }
                        }
                    }
                }
            }
        }
    }
}

function switch_( i , j ){
    
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp

    cycle_and_store()
}

function cycle_and_store(){

    let front_pos = 0;

    while(front_pos < arr.length){

        save_legal_date()
        // get the last element
        let last = arr.pop()
        // stick the last ement to the front
        arr.unshift(last)
        front_pos++;
    }
}


// * * * Save legal dates * * *

function save_legal_date(){

    let str = arr.join('')

    if(is_legal_date(str)){

        let str_int = parseInt(str)

        if(str_int < smallest){
            smallest = str_int
        }

        // console.log(str)
        set.add(str)
    }
}


// * * *  Check if date is legal  * * *  //
// * * * Below is_legal_date() are all its helper functions * * * //

function is_legal_date(str){

    let date_array = get_date_array(str)

    if( date_array[2] < birth_year ){

        return false
    }
    if( date_array[1] < 1 || months_in_year < date_array[1] ){

        return false
    }
    
    if( date_array[0] < 1 || possible_days( date_array[1], date_array[2] ) < date_array[0] ){

        return false
    }

    return true
}


// function possible_days() calls is_leap_year()
// to computer possible days in a month
function is_leap_year(year){

    if(!(year % 400)) return true
    if(!(year % 100)) return false
    if(!(year % 4)) return true
    return false
}

function possible_days(month, year){

    if( month === 2 ){

        if( is_leap_year(year) ){

           return days_in_month[month]['leap']
           //return 29

        } else {

            return days_in_month[month]['regular']
        }

    } else {

        return days_in_month[month]
    }
}


// function get_date_arra() call helper sub_string
function sub_string(str, i, j){

    let sub_str = ''

    for(let k = i; k < j; k++){

        sub_str += str[k]
    }
    return sub_str
}

function get_date_array(str = '00000000'){

    let year = parseInt(sub_string( str, 0, 4 ))
    let month = parseInt(sub_string( str, 4 , 6))
    let day = parseInt(sub_string( str, 6 , 8 ))
    return [day, month, year]
}
