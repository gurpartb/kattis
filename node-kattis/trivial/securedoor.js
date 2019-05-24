function parse_status(status){

    const obj = {entry:"entered",exit:"exited"};
    return obj[status];
}

function parse_str(str){

    const arr = str.split(' ');
    const obj = {name:arr[1], status:parse_status(arr[0])};
    return obj;
}

function update_log(log, obj){

    const exited = 'exited';
    const anamoly = "(ANOMALY)";
    const ok = "";

    if(!log[obj.name]){

        log[obj.name] = exited;
    }

    if(log[obj.name] === obj.status){

        return anamoly;
    }

    log[obj.name] = obj.status;

    if(log[obj.name] === exited){

        delete log[obj.name];
    }

    return ok;
}

const log = {};

function securedoor(str){

    const obj = parse_str(str);
    const res = update_log(log, obj);
    console.log(obj.name, obj.status, res);
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let num;

rl.on('line', (line) => {

    if(!num){

        num = line;
    }
    else {

        securedoor(line);
    }
});