function addAndSubtract(arr){

    let sumOfArr = 0
    let sumOfModedArr = 0

    for(let i = 0; i < arr.length; i++){
        
        sumOfModedArr += arr[i]
        if(arr[i] % 2 == 0){
            arr[i] += i
        
        } else {
            arr[i] -= i 
        }
        sumOfArr += arr[i]
    }


    console.log(arr);
    console.log(sumOfModedArr);
    console.log(sumOfArr);
}
addAndSubtract([-5, 11, 3, 0, 2])