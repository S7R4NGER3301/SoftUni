function calculator(firstNum, sign, secondNum) {

    if (sign == '+') {
        console.log((firstNum + secondNum).toFixed(2))
    } else if (sign == '-'){
        console.log((firstNum - secondNum).toFixed(2));
    } else if (sign == '/'){
        console.log((firstNum / secondNum).toFixed(2));
    } else if (sign == '*'){
        console.log((firstNum * secondNum).toFixed(2))
    }
}
calculator(5, '+', 10)