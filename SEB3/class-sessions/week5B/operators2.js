// string 

let str1 = "Ellie"
let str3 = "is in the class"
 

let result = str1 + " " + str2 + " ????"
let result3 = `${str1+ str3 + "NEW NEW NEW"     }`

console.log(result3)


let number1 = 23
let number2 = 25
let myString = "80"


console.log(number1 + "2"); // error , 23 * "80" , "1840" , "23 * 80", 
console.log(typeof (number1 * "2"))

console.log(number2 * "30") 
console.log(number2 + "30") 


let myNewVar = "23.75rt"

console.log(Number(myNewVar))
console.log(parseInt(myNewVar))
console.log(parseFloat(myNewVar))

let number45 = 45

console.log(number45 + (myNewVar)) // 4523.75rt

console.log(typeof String(12.57))



console.log(str2[1])
console.log(str2[2])

console.log(str.length)

console.log(str[2])
console.log(str[0])
console.log(str[5])

for(let i = 0 ; i < str.length; i++){
    console.log(str[i])
}


// Number()

let number5 = "20"
console.log(typeof number5)


let result6 = Number(number5) //20
console.log(typeof result6)


let num =  '12345'

for(let i = 0 ; i < num.length ; i++){
    num[i] = "1"
}

console.log(num)