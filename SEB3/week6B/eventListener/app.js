// event ==> when a user done something in the browser
// click something
// When the mouse moves over an element

console.log("=======")

// document.queryselector("#input-1") 
let input = document.getElementById("input-1") 
console.log("BEFORE" , input)


// set value attribute

input.setAttribute("value", "1234567")
console.log("AFTER", input)


console.log(input.getAttribute("value"))

input.setAttribute("value", "SEB3")


console.log("======")






let button1 = document.getElementById("click-btn")
console.log(button1)

let divContainer = document.getElementById("container")

function callMe(){
    console.log("SHOW ME ME!!")
}


function inputCall(){
   console.log(input.getAttribute("value"))
}

// button1.addEventListener("click",  function (event){
//     alert("You clicked me!!")
//     document.body.style.background = "blue";
//     console.log("YOU have done it !")
//     console.log(event)
//     // divContainer.innerHTML = "<h1> YES </h1> <p> this is paragraph</p>"
//     // divContainer.innerText = "The button is clicked!!!!" 
    
// })


// input.addEventListener("keydown", function(event){
//     divContainer.style.color = "red"
//     divContainer.style.fontSize = "200px"
//     input.value = event.key
//     console.log(input.value)
// })


let button2 =  document.querySelector("#submit-btn")

button2.addEventListener("mouseover", function(){
    button2.style.fontSize = "120px";
    button2.style.color = "black"
})

button2.addEventListener("mouseout", callMe())

console.log(divContainer);


