const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let n, m
rl.on('line', (line) => {

    if(!n){

        n = parseInt(line);
        m = n;

    }else{

        n -= 1;
        let str = `Case #${m - n}: `;

        line.split('').forEach(el =>{

            let num = el.charCodeAt(0) - 'a'.charCodeAt(0) + 6;
            let times = 0;

            if(num <= 23){

                times = num% 3 + 1;
                num = Math.floor(num/3);

                if(num === -20){
                    num = 0;
                    times = 1;
                }

            }else if(num === 24){

                num = 7;
                times = 4;

            }else if(num <= 27){

                num = num - 1;
                times = num% 3 + 1;
                num = Math.floor(num/3);

            }else{

                num = num + 8;
                times = num % 4 + 1;
                num = Math.floor(num/4);
            }

            if(str[str.length - 1 ] == num){
                str += ' ';
            }

            for(let i = 0; i < times; i++){
                str += num;
            }

        });

        console.log(str);
    }
});