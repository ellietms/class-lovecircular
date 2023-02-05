// DOM methods
// find an element in HTML file

// query selector
let firstDIv = document.querySelector("#div-container")
console.log(firstDIv)

let secondWayFirstElement = document.getElementById("div-container")
console.log(secondWayFirstElement)

console.log("===========")

// query selector 
let secondDiv = document.querySelector(".second-div")
console.log(secondDiv)

let secondWaySecondElement = document.getElementsByClassName("second-div")[0]
console.log(secondWaySecondElement)


// 
let header = document.getElementsByTagName("h1")[0]
console.log(header)


// change the style of that element from my HTML file

header.style.backgroundColor = "yellow"
header.style.textAlign = "center"


secondDiv.style.border = "4px solid green"
secondDiv.style.padding = "5px"

header.style.color = "red"


let body = document.getElementsByTagName("body")[0]
console.log(body)

let newElement = document.createElement("div")
newElement.innerText = "This is a vlue"
secondDiv.appendChild(newElement)
newElement.style.border = "2px solid blue"
console.log(body)


// add some style for that element 




