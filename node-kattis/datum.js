

var month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
var day = 'Wednesday Thursday Friday Saturday Sunday Monday Tuesday'.split(' ');
var num_days = 7;
function get_day(m, d){
    let sum = 0;
    for(let i = 1; i < m; i++){
        sum += month[i];
    }
    console.log(day[sum%num_days]);
}

get_day(1, 1);