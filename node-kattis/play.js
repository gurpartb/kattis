function dayOfProgrammer(year) {

    const days_per_month = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day_of_programmer = 256;

    days_per_month[1] = days_in_feb(year);
    console.log(days_per_month.reduce((a,b) => a+b))

    let month = 0, day = 0;

    for(let i = 0; i < days_per_month.length; i++){

        day += days_per_month[i]

        if(day > day_of_programmer){

            day = day_of_programmer - day + days_per_month[i];
            month = i + 1;
            break;
        }
    }
    //console.log('day:', day, ', month:', month)

    let smallest_double_digit = 10
    if(month < smallest_double_digit){
        month = '0'+month;
    }

    if(day < smallest_double_digit){
        day = '0'+day;
    }

    return `${day}.${month}.${year}`;
}

function days_in_feb(year){

    const lost_feb_days_1918 = 13;
    const feb_days_reg = 28;
    const feb_days_leap = 29;
    const feb_days_1918 = feb_days_reg - lost_feb_days_1918;

    if(year == 1918){

        return feb_days_1918;

    } else if(year%4){ // non leap year

        return feb_days_reg;

    }else{ // possible leap year

        if(year < 1918){ // julian leap year

            return feb_days_leap;

        } else {

            if(year%400){

                return (year%100)? feb_days_leap : feb_days_reg;

            } else { // leap year

                return feb_days_leap;
            }
        }
    }
}

console.log(dayOfProgrammer(2017))