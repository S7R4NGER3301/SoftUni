function passwordValidator(password){

    for(let index = 0; index < password.length; index++){
        
    }

    //long
    let isLongEnough = false

    if(password.length < 6 && password.length > 10){
        isLongEnough = true
    }
    if(!isLongEnough){
        console.log("Password must be between 6 and 10 characters");
    }
}
passwordValidator('logIn')