function maxNumber(arr){

    for(let i = 0; i < arr.length; i++){
        
        for(let j = 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                console.log(arr[i]);
            }
        }
    }
}
maxNumber([1, 4, 3, 2])