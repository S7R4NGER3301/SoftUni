function signCheck(num1, num2, num3){

    let res = num1 * num2 * num3
    if(res < 0){
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck()