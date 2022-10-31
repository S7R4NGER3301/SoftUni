function solve(number){

    for(let i = 1; i <= number; i++){
        let string = ''

        for(let j = 1; j <= i; j++){
            string += `${i} `
            
        }
        console.log(string);
    }
}
solve(5)