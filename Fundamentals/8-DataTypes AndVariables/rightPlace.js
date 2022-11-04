function rightPlace(first, missing, second){

    let res = first.replace('_',missing)
    let output = res === second ? "Matched": "Not Matched"
    console.log(output);
}
rightPlace('Str_ng', 'I', 'Strong')