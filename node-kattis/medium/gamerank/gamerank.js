class Player{
    constructor(){
        this.rank = 25;
        this.stars = 0;
        this.streak = 0;
    }
}

function win(player = {rank:25, stars:0, streak:0}){

    if(player.rank === 0){
        return;
    }

    player.stars += 1;
    player.streak += 1;

    if(player.streak >= 3 && player.rank >= 6){
        player.stars += 1;
    }
    
    if(player.rank >= 21){
        rankWin(player, 2)
    }
    else if(player.rank >= 16){
        rankWin(player, 3);
    }
    else if(player.rank >= 11){
        rankWin(player, 4);
    }
    else {
        rankWin(player, 5);
    }
}

function rankWin(player, maxStars){
    if(player.stars > maxStars){
        player.rank -= 1;
        player.stars = player.stars - maxStars;
    }
}

function loss(player = {rank:25, stars:0, streak:0}){
    player.streak = 0;
    if(player.rank === 0 || player.rank > 20 || (player.stars === 0 && player.rank === 20)){
        return;
    }

    player.stars -= 1;

    if(player.stars >= 0){
        return;
    }

    player.rank += 1;

    if(player.rank <= 10){
        player.stars = 4;
    }
    else if(player.rank <= 15){
        player.stars = 3;
    }
    else {
        player.stars = 2;
    }
}

function gameRank(str){
    let player = new Player();
    str.split('').forEach(element => {
        if(element === 'W'){
            win(player);
        }else{
            loss(player);
        }
    });
    return player.rank;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let res = gameRank(line);
    console.log(res || 'Legend' )
});