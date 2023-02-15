// synchronous

// one task at a time
// blocks other tasks until the previous task is finished and we get the result of that

function firstFunction(){
   console.log("First function")
}

function secondFunction(){
   console.log("Second function")
}

function thirdFunction(){
    secondFunction();
    firstFunction();
  console.log("Third Fucntion ")
}

function forthFunction(){
    thirdFunction();
   console.log("Finished")
}

// firstFunction();
// secondFunction();
// thirdFunction();
// forthFunction();





// asynchronous 
// runs all the tasks one after the other and it is non-blocking

function greeting(){
    console.log("Hello! Nice to meet you")
}


function byeGreeting(){
    console.log("We are saying BYE")
}


setTimeout(greeting, 3000)
console.log("We are testing the results")
setTimeout(byeGreeting, 5000)
console.log("Finished ")

// promises


// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.



// async and awit


//  Async functions always return a promise



