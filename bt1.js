let mark=[95, 56, 74, 82, 88, 43, 20];
let avg = findAvg(mark);
console.log(avg);
function findAvg(arr){
    let sum=0;
    let avg;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg =sum/arr.length;
    return avg;
}
