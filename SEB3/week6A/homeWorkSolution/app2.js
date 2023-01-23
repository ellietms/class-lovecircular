// question 9

function countBMW(arrayOfCars) {
  let count = 0;
  for (let i = 0; i < arrayOfCars.length; i++) {
    if (arrayOfCars[i]["carModel"] === "BMW") {
      count++;
      console.log(`We have ${count} BMW`);
    } else {
      console.log(`This is the model of the car: ${arrayOfCars[i]["carModel"]}`);
    }
  }
}

let array = [
  { carModel: "BMW", color: "yellow", year: 2001 },
  { carModel: "Ford", color: "Black", year: 2012 },
  { carModel: "RENULT", color: "BLUE", year: 2010 },
  { carModel: "BMW", color: "yellow", year: 2000 },
  { carModel: "BMW", color: "PINK", year: 2001 },
  { carModel: "TESLA", color: "BROWN", year: 2012 },
  { carModel: "RENULT", color: "yellow", year: 2010 },
  { carModel: "BMW", color: "yellow", year: 2000 },
];

console.log(array)
console.log(countBMW(array))


// for(let i= 0 ;  i < array.length ; i++){

//     console.log("Index: " , i)
//     console.log(array[i]["carModel"])
// }
