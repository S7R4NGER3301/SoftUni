function simpleCalculator(firstNum, secNum, operator) {

    let sum = 0
    switch (operator) {
        case 'multiply':
            sum += firstNum * secNum
            break
        case 'divide':
            sum += firstNum / secNum
            break
        case 'add':
            sum += firstNum + secNum
            break
        case 'subtract':
            sum += firstNum - secNum
            break
    }
    console.log(sum);

}
simpleCalculator(5, 5, 'multiply')

