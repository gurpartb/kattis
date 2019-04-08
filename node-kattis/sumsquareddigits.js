function SSD(b, n){
    
    let num_base = n.toString(b);

    let arr = num_base.split('');

    arr = arr.map(x => parseInt(x,b)**2);

    return arr.reduce( (a, b) => a + b, 0);
}