function specialNumbers(n){

    for(let i = 1; i <= n ; i++){
        
        if(i > 10){
            i += '' + i
        }
    }
}
specialNumbers(15)