function sumEvenNumbers(num){
    let sum = 0
    for (let i of num){
        let strToNum = Number(i)
        

        if(strToNum % 2 == 0){
            sum += strToNum
            
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])