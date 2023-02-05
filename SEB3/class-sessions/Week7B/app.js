// 1
let fruits = ["banana", "watermelon", "raspberry", "lychee"];

addFruit = (addedFruit) => {
    fruits.push(addedFruit)
    console.log("Fruits with added fruit: ", fruits)
}

addFruit(process.argv[2])

// 2

renderFruitsAsString = () => {
    let newString = fruits.join(" * ")
    console.log("Fruits as string: ", newString)
}

renderFruitsAsString()

// 3

reverseFruits = () => {
    let reverse = fruits.reverse()
    console.log("Reversed Fruits: ", reverse)
}

reverseFruits()

// 4

removeLastFruit = () => {
    let removeFruit = fruits.pop()
    console.log("Fruits with last item removed: ", fruits)
}

removeLastFruit()


// let userName = process.argv[2];
//   let age = process.argv[3];
  
//   console.log("name: " + userName);
//   console.log("age: " + age);
  