function pikemaneasy( N, T, A, B, C, t0, penMod = 1000000007){

    let t = [];
    let i = 0;

    t[i] = t0;
    i++;

    while(i < N ){

        t[i] = ( (A * t[i-1] + B) % C) + 1;
        i++;
    }

    t.sort( (a,b) => a - b );

    let penalty = 0;
    let j = 0;
    let tp = 0;

    while(j < N ){

        if(tp + t[j] > T){

            break;
        }

        penalty = (penalty + t[j] + tp) % penMod;

        tp += t[j];

        j++
    }

    let res = [j, penalty];
    
    return res;
}