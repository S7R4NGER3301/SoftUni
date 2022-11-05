function oddAndEvenSum(number) {
    
    let numToString = number.toString()
    let odd = 0
    let even = 0


    for (let index = 0; index < numToString.length; index++) {

        let stringToNum = Number(numToString[index])

        if (stringToNum % 2 == 0) {
            even += stringToNum
        } else {
            odd += stringToNum
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435)