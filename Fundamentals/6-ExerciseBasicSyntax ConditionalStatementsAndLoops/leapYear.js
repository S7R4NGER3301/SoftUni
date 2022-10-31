function leapYear(year){

    let calculation = year % 4 == 0 && year % 100 != 0 || year % 400 == 0
    
    if(calculation) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(4)