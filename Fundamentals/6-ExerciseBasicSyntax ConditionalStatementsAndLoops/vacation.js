function vacation(groupPeople, groupType, dayOfWeek) {

    let price = 0
    switch(groupType){
        case 'Students':
            if(dayOfWeek == 'Friday') {
                price = 8.45 * groupPeople
            } else if (dayOfWeek == 'Saturday') {
                price = 9.80 * groupPeople
            } else if (dayOfWeek == 'Sunday') {
                price = 10.46 * groupPeople
            } 
            if(groupPeople >= 30){
                price = price * 0.85
            }
        break

        case 'Business':
            if(dayOfWeek == 'Friday') {
                price = 10.90 * groupPeople
            } else if (dayOfWeek == 'Saturday') {
                price = 15.60 * groupPeople
            } else if (dayOfWeek == 'Sunday') {
                price = 16 * groupPeople
            }
            if(groupPeople >= 100){
                price = price - (price * 10)
            }
        break

        case 'Regular':
            if(dayOfWeek == 'Friday') {
                price = 15 * groupPeople
            } else if (dayOfWeek == 'Saturday') {
                price = 20 * groupPeople
            } else if (dayOfWeek == 'Sunday') {
                price = 22.50 * groupPeople
            }
            if(groupPeople >= 10 && groupPeople <= 20){
                price = price * 0.95
            }
        break
    
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
"Regular",
"Saturday")