// global scope 
let myFirst = "Ellie"

function callMe(){
    let newV = "David"
    console.log(myFirst)
    console.log(newV)
}

// 
let newV = "NEW ONE"

console.log(callMe())
console.log(newV);
myFirst = "Not Ellie"
console.log(myFirst)
console.log(callMe())