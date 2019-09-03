function kornislav(line){

    let arr = line.split(' ').map( x => parseInt(x));

    arr.sort((a,b) => a-b);

    return arr[0]*arr[2];
}