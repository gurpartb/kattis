const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstLine, secondLine;

rl.on('line', (line) => {

    if(!firstLine){

        firstLine = line;
    } 
    else if(!secondLine){

        secondLine = line;
    }
    else {

        let firstDay = 'sunday';
        let arr = line.split(' ').map( x => parseInt(x) );

        let res = friday(firstDay, arr);
        console.log(res)
        secondLine = undefined;
    }
});

function isFiday13th( firstDay, daysInMonth){

    let sunday = 'sunday'
    let thirteen = 13;
    return (firstDay === sunday && daysInMonth >= thirteen);
}

function getFirstDayNextMonth( firstDay, daysInMonth){

    let week = ['saturday','sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let indexFristDay = week.indexOf(firstDay);
    let indexFirstDayNextMonth = (indexFristDay + daysInMonth) % week.length;
    return week[indexFirstDayNextMonth];
}

function friday(firstDay, daysArr = []){

    let count = 0;

    daysArr.forEach( days =>{

        if(isFiday13th( firstDay, days)){
            count++;
        }

        firstDay = getFirstDayNextMonth( firstDay, days);
    });

    return count;
}

// let firstDay = 'sunday';
// let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// let res = friday(firstDay, arr);
// console.log(res)