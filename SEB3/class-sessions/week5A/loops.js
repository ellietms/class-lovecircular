
for(let k = 10; k <= 20; k = k + 1){
    console.log(k)
}

console.log("====")

for(let j = 24 ; j > 20 ; j = j -1 ){
    console.log(j)
}

console.log("----------")

for(let i = 12; i <= 120;i =  i * 2 ){
    console.log(i)
}


// while 


console.log("------ WHILE -------")

let count = 15
// while(count > 0 &&  count < 20){
//    console.log(count);
//    count = count - 1; 
// }


do{
    console.log(count);
    count = count - 1; 
}
while(count > 0 &&  count < 20);




console.log("=======WHILE ==========")

let arr = [100,2,30,4,5,600,7,80,9,10,12]


for(let index = 0; index < arr.length ; index++){
    console.log(arr[index]);
}


console.log("====== FOR IN ======")


const car = {
  model: "Fiat",
  color: "white",
  yearReleased: [1967, 2011, 2021, 2023],
  gearBox: "manual autumatic",
};

for(let key in car){
    console.log(car[key])
}


console.log("==== FOR OF =====")

const myCar = ["BMW", "Fiat"]

for(let value of myCar){
    console.log(value)
}



