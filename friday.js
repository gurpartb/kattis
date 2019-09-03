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