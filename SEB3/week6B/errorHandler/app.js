// splice 

// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// The splice() method adds and/or removes array elements.

//add
// fruits.splice(2, 0, "Lemon", "Kiwi");

//remove
// fruits.splice(2, 2);

// add item in specific index
fruits.splice(2, 0 , "Strawberry")
console.log(fruits);

// remove item in specific index
fruits.splice(2,1);
console.log(fruits);

// overwrite
 fruits.splice(2,1,"Worry")
 console.log(fruits)
fruits.splice(2,1, "Apple")
console.log(fruits)


// var arr = [1,2,3,4,5]


function create(a,b){
    let result = a * b
    console.log("I created a function!!")
    return result;
}

// function description

// parameters  - 

// call functions - use it 
create(3,5)

//arguments  - 


// methods --- built-in , methods 



// try and catch
function create(a, b){
    try{
        let result = a * b
        console.log("I created a function!!")
        return result;
    }
    catch(error){
      console.log("Sorry, something went wrong! we are on it" , error)
    //   new throw 
    }
}




// error
 




