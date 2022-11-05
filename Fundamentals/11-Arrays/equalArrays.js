function equalArrays(arr1, arr2) {
   
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i])
    }

    let isEqual = true
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual=false
            break
        } else if (arr1[i] == arr2[i]) {
            
        
        }
    }

}
equalArrays(['10','20','30'], ['10','20','30'])

// function equalArrays(arr1, arr2) {
//     let isEqual = true;
//     let sumArr1 = 0;
//     let indexUnidentical = 0;
  
//     for (let i = 0; i < arr1.length; i++) {
//       arr1[i] = Number(arr1[i]);
//       arr2[i] = Number(arr2[i]);
//       if (arr1[i] !== arr2[i]) {
//         indexUnidentical = i;
//         isEqual = false;
//         break;
//       }
//       sumArr1 += arr1[i];
//     }
//     if (isEqual) {
//       console.log(`Arrays are identical. Sum: ${sumArr1}`);
//     } else {
//       console.log(
//         `Arrays are not identical. Found difference at ${indexUnidentical} index`
//       );
//     }
//   }

// equalArrays(["10", "20", "30"], ["10", "20", "30"]); 

