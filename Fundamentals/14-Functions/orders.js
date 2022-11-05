function orders(product, ammount){

    //prices
    let coffeePrice = 1.50
    let waterPrice = 1.00
    let cokePrice = 1.40
    let snacksPrice = 2.00
    let totalPrice = 0

    //total price checker
    if(product == 'coffee'){
        totalPrice += ammount * coffeePrice
    } else if (product == 'water'){
        totalPrice += ammount * waterPrice
    } else if (product == 'coke'){
        totalPrice += ammount * cokePrice
    } else if (product == 'snacks'){
        totalPrice += ammount * snacksPrice
    }   
    
    console.log(totalPrice.toFixed(2));

}
orders("water", 5)
