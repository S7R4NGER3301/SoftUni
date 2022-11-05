function reverseAnArrayOfNumbers(n, array){

    let secArray = []

    for (let i = 0; i < n; i++){
        secArray[n - 1 - i] = array[i]
       
    }
    let sum = secArray.join(' ')
    console.log(sum);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])