
// creating a function - described 
function multiply(number1, number2){
    return  number1 * number2;
}


// console.log(multiply(30, 4))


function add(number1, number2, number3){
    return  number1 + number2 + number3
}


// console.log(add(1,10,20))

function divide(number1, number2){
    let result = number1 / number2;
    console.log(number2)
    console.log("Inside function")
    return result;
}

// check result when we do not have one argument for second parameter
let result = divide(20,)
console.log(result)




function showSomething(){
    console.log("Today is Monday")
}


// check when we add one argument to it
console.log(showSomething(10))