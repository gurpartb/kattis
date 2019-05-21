// Find upto last 3 non-zero digits of n!
// Three only not more than three

const pow_arr = [ 1 ];

function pow( base, exp, sig_fig ){

    let res = pow_arr[ pow_arr.length - 1 ];
    const modder = 10**sig_fig;
  
    while( pow_arr.length <= exp ){

      res = ( res * base ) % modder;
      pow_arr.push( res );
    }
  
    return pow_arr[ exp ] % modder;
}
  
function tail_fact( n, sig_fig ){

    let res = 1;
    const modder = 10**sig_fig;
    n = n % modder;

    while( n % 5 ){

        res = ( res * n ) % modder;
        n--;
    }

    return res;
}
  
function factorial( n, sig_fig ){

    let res = 1;
    const modder = 10**sig_fig;

    while( n > 1 ){

        res = ( res * n ) % modder;
        n--;
    }

    return res;
}
  
function D( n, sig_fig = 3 ){

    let res;

    if( n < 5 ){

        return factorial( n, sig_fig );
    }

    const exp = Math.floor( n / 5 );
    const base = 12;
    const modder = 10**sig_fig;

    res = ( pow( base, exp, sig_fig ) * D( exp ) ) % modder;
    res = ( res * tail_fact( n, sig_fig )  ) % modder;

    return res;
}

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

const sig_fig = 3;

rl.on( 'line', ( line ) => {

    const num = parseInt( line );

    let res = D( num, sig_fig );

    if(res <= 99 && num >= 7 ){

        res = res.toString();

        while( res.length < 3 ){

            res = '0' + res;
        }
    }

    console.log( res );
} );