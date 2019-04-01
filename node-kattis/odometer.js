let arr = [0]
let count = 1111;
let i = 0;

while(count){
    process.stdout.write(arr.toString()+' ');
    arr[i]++;
    if(arr[i]>9){
        arr[i] = 0;
        let j = i - 1;
        while(j>=0){
            if(arr[j]<9){
                break;
            }
            arr[j] = 0;
            j--;
        }
        if(j<0){
            arr.push(0)
            i++;
        }
        else {
            arr[j]++;
        }
        console.log()
    }
    count--;
}