function sumOfDigits(number){

    let str = ''
    let numTostring = number + str
    let sum = 0

    for(let i = 0; i < numTostring.length; i++){
        sum += Number(numTostring[i])
    }
    console.log(sum);

}
sumOfDigits(245678)