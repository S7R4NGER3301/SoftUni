function evenAndOddSubtraction(arr){

    let odd = 0
    let even = 0
    for (let i of arr){
        
        if(i % 2 == 0){
            even += i
        } else {
            odd += i
        }
    }

    console.log(even - odd);
}
evenAndOddSubtraction([1,2,3,4,5,6])