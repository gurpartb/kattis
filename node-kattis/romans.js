const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const feet_per_english_mile = 5280
const feet_per_roman_mile = 4854
const paces = 1000

rl.on('line', line=>{

    const english_mile = parseFloat(line)

    const roman_paces = Math.round(english_mile*paces*feet_per_english_mile/feet_per_roman_mile)
    
    console.log(roman_paces)
})