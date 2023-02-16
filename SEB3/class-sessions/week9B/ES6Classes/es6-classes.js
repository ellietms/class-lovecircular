// what is synchronous
// what is asynchronous
// what is promises



let promise = new Promise(function(resolve, reject){
    try{
        resolve(" Success ")
    }
    catch(error){
        reject(error)
    }
  
})
.then(response => console.log("response", response))


var p = new Promise(function(resolve, reject) {
    resolve(1);
});

var eventuallyAdd1 = (val) => {
    return new Promise(function(resolve, reject){
        resolve(val + 1);
    });
}

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => val).then(res => res+1).then(res => console.log(res + 3))