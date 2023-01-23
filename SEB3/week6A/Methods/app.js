// string ,array 

let myName = "Ellie"

console.log(myName.length)

console.log(myName[4])

// array methods 

let scores = [0, 12, 20, 19, 11, 15, 17]

// push - add one element at the end of the array

let result = scores.push(13)
// scores.push([20,30,40])
// scores.push({myScore: 20})
console.log(scores)



// pop - remove an element from the end of array

scores.pop()
scores.pop()
console.log(scores)


// unshift - add element in the first index of array

scores.unshift(14.5) 

scores.unshift(18.25)

console.log(scores)

// shift -  remove from the first index

scores.shift()
scores.shift()
console.log(scores)


// join - put items into a string ( can add seprator)

let result2 = scores.join("")
console.log(result2)


// concat - combine two arrays and put items in one array
let secondScores = [-2, -3, -6, -10]
let result3 = secondScores.concat(scores)
console.log(result3)


// slice
console.log("=======")
let result4 = scores.slice()
console.log(result4)
let firstSlice = scores.slice(1,5)
console.log(firstSlice)
let result6 = scores.slice(1,)
console.log(result6)


// sort

scores.sort()
let alphabets = ["a", "d" , "z" , "g" , "h"]
alphabets.sort()
console.log(alphabets)

reverse
console.log(scores)
scores.reverse()
console.log(scores)


// filter

function filterNames(name){
    if(name.includes("o")){
        return name
    }
}

let array9 = ["Aqsa", "cedric", "Joseph", "Joshu", "Loius","Ellie"]

let a = array9.filter(filterNames);
console.log(a)



// map 





// splice
