function repeatString(string, rep){

    let result = ''
    for(let i = 0; i < rep; i++){
        result += string
    }

   
    return result
}

console.log(repeatString("abc", 3))