function commonElements(arr1, arr2){

    for(let a1 = 0; a1 < arr1.length; a1++){
        
        for(let a2 = 0; a2 < arr2.length; a2++){
            if(arr1[a1] === arr2[a2]){
                console.log(arr1[a1]);
            }
        }
    }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])