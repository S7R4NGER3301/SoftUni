function sumOfOddNumbers(num){

    let sum = 1
    let owerall = 0
    
    for(let a = 0; a < num; a++){
        console.log(sum);
        owerall += sum
        sum += 2
    }
    console.log(`Sum: ${owerall}`);
}
sumOfOddNumbers(5)