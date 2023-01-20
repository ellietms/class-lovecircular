// object methods  - 12 min  - mention strings 

const myBuilding = {
   name: "Tower Bridge" ,
   color: "blue",
   callTheName: function() {
     return ("This is Tower Bridge")
   }
}



console.log(myBuilding["name"])
console.log(myBuilding.name)
console.log(myBuilding.callTheName())


const course = {
    name: "full stack engineering",
    fail: function (){
        let personName = "Ellie"
        retrun (personName , "is Failed")
    },
    pass: function(personName, grade, date){
       return (personName, "grade is", grade , "in this ", date )
    }
}

console.log(course.fail())
console.log(course.pass("dane", 8, "18 Jan 2023"))



//  remove properties - 5 min 

delete myBuilding.name

console.log(myBuilding);

myBuilding["name"] = "London Eye"

console.log(myBuilding)

delete myBuilding.name

console.log(myBuilding)



// object.keys()

/*

const myBuilding = {
   name: "Tower Bridge" ,
   color: "blue",
   callTheName: function() {
     return ("This is Tower Bridge")
   }
}


*/


console.log(Object.keys(myBuilding))  // [array of the key names of the object]

for(let keyName in myBuilding){
    console.log(keyName)
}

let arr = ["e", "b", "c"]


// console.log("======")

for(let element in arr){
    console.log(element)
}




// break and continue

for(let i = 0 ;  i < 10 ; i++){
    if(i > 1 && i < 5){  //1 < i < 5 , 2,3,4
      console.log(i)
    }
    else if(i >= 5 && i < 7 ){   // 5 <= i < 7 , 5,6
       break;
    }
    else{
        console.log("other numbers")  // 7,8, 9 
    }
    // else{   // 7 <= i < 10
    //    break;
    // }
}



