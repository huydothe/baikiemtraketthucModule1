function checkPrime(a) {
    if(a<2){
        return false;
    }else if(a===2){
        return true;
    } else {
        let flag=true
        for (let i=2; i<=Math.sqrt(a); i++){
            if(a%i===0){
                flag=false;
                break;
            }else {
                flag=true;
            }
        }
        if(flag){
            return true;
        }else {
            return false;
        }
    }
}

function sumOfListPrime(){
    let x=+prompt('Enter x');
    let sum=0;
    for(let i=0; i<=x; i++)
    if(checkPrime(i)){
        sum+=i
    }
    return sum;
}
console.log(sumOfListPrime());
