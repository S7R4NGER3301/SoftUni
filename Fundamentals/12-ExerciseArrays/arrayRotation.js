function arrayRotation(arr, rotations){

    for(let i = 0; i < rotations; i++){
        let a = arr.shift()
        arr.push(a)
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)