function getSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 != 0){
            sum += array[i];
        }
    }
    console.log(sum);
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSum(myNumbers);