function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3

    if(sum !== Math.trunc(sum)){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}
integerAndFloat(100, 200, 303)