
function verdoppeln(number, callback){
    number *= 2;
    callback(number)    //callback(number)


}


verdoppeln(5, function (number) {
    console.log(number)
});

// Why TF does this work
