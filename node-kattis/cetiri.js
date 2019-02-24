var readline = require('readline');
// Doesn't work

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line =>{
    let seq = line.split(' ').map(x => parseInt(x));
    seq = seq.sort((a,b)=>a-b);
    let least_dist = Math.abs(seq[0]-seq[1]);
    let final_dist = Math.abs(seq[1]-seq[2]);
    least_dist = least_dist < final_dist ? least_dist : final_dist;
    let lost_num_arr = [0,1,2,3].map(x=>seq[0]+x*least_dist);
    //console.log(seq, lost_num_arr)
    let lost_num = lost_num_arr[3];
    seq.push(lost_num);
    seq.forEach((a,i)=>{
        if(a!=lost_num_arr[i]){
            lost_num = lost_num_arr[i];
        }
    })
    lost_num = lost_num <= 100 ? lost_num : seq[0]-least_dist;
    console.log(lost_num)
});