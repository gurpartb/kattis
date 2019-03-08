// * * * This program missed the time limit * * * //

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const req_process_time = 1000
let total_requests
let req_per_sec_per_server
const req_times = []

rl.on('line', line =>{

    if(!total_requests){

        let arr = line.split(' ')
        total_requests = parseInt(arr[0])
        req_per_sec_per_server = parseInt(arr[1])

    } else {

        req_times.push(parseInt(line))
    }
})

function get_req_per_sec(i){

    let req = 0

    for (let j = i; j < req_times.length; j++){

        if(req_times[j] < req_times[i] + req_process_time){

            req++

        }else{

            break
        }
    }
    return req
}

process.stdin.on('end', ()=>{

    let max_req_per_sec = 0

    for(let i = 0; i < req_times.length; i++){

        let req_per_sec = get_req_per_sec(i)

        if(max_req_per_sec < req_per_sec){

            max_req_per_sec = req_per_sec
        }
    }

    let servers_needed = Math.ceil(max_req_per_sec/req_per_sec_per_server)

    console.log(servers_needed)
})