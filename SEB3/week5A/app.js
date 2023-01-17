let userName = "cedric";
console.log(typeof userName)

let myArray = [1, true, "ellie", null, [1, 2, "aqsa", false]];

console.log(myArray);
console.log(myArray[2 + 1])
console.log(myArray[4])

let mySecondArray = new Array()
let myThirdArray = new Array(10)

console.log(mySecondArray);
console.log(myThirdArray.length);

let arr =[]
arr[0] = "Love circular"

console.log(arr)

arr[2] = 2

console.log(arr)

arr[1] = false

console.log(arr)

arr[10] = "This is another item"

console.log(arr)

arr[6] = 46

console.log(arr)

const car = {
  model: "Fiat",
  color: "white",
  yearReleased: [1967, 2011, 2021, 2023],
  gearBox: "manual autumatic",
};

console.log(car);

console.log(car["color"]);
console.log(car["model"]);
console.log(car["yearReleased"][3]);

const person = {
  myName: "Ellie",
  address: {
    flatNumber: 20,
    streetName: "Tower Bridge",
  },
  role: "software engineer",
  friends: ["Sarah", "Raha"],
};

console.log(person["address"]["streetName"]);

console.log(person["address"]["flatNumber"]);

console.log(person.address.flatNumber)


console.log(person.friends[1])


console.log(person["friends"][1]);

let myBasketData = [
  { namePerson: "Ellie", item: "cloth", price: 100 },
  { namePerson: "Ellie", item: "fruit", price: 10 },
  { namePerson: "Ellie", item: "toys", price: 50 },
];


console.log(myBasketData[1]["price"])