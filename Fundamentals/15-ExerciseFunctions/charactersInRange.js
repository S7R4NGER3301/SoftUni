function charactersInRange(char1, char2){
    
    //chars to nums in ascii
    let firstNum = char1.charCodeAt()
    let secNum = char2.charCodeAt()
    
    let bigest = Math.max(firstNum, secNum)
    let smallest = Math.min(firstNum, secNum)

   let str = ''


    for (let index = smallest + 1; index < bigest; index++) {
      
        let n = String.fromCharCode(index)
        str += `${n} `
    } 

    console.log(str);
}
charactersInRange('#', ':')