

function f(n){
    let tot = 0;
    for(let i = 1; i<=n; i++ ){
        for(let j = 1; j<=i; j +=2){
            tot++;
        }
    }
    return tot;
}

console.log(f(2*50)==(50*(50+1)))