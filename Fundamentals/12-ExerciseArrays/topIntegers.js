function topIntegers(input){

    let arr = []
    
    for(let i = 0; i < input.length; i++){
    
        let isTrue = true
        let currentNumber = input[i];

        for(let k = i + 1; k < input.length; k++){
            if(currentNumber <= input[k]){
                isTrue = false
            }
        }
        if(isTrue){
            arr.push(input[i])
        }
        
    }
    console.log(arr.join(' '))
    
    
}
topIntegers([1, 4, 3, 2])