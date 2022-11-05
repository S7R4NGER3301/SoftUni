function palindromeIntegers(arr){

    
    for (let i = 0; i < arr.length; i++) {
        let secArr = []
        let element = arr[i]
        

        let elementToString = element.toString()
        secArr += elementToString

        
        console.log(secArr);
        
    }
}
palindromeIntegers([123,323,421,121])