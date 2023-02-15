class Trainers {
    #ownerName;
    #price;
    constructor(valueownerName, valueyear, valuebrand, priceValue){
         this.#ownerName = valueownerName;
         this.year = valueyear;
         this.brand = valuebrand;
         this.#price = priceValue;
    }
    secondOwner = "Joshu";
    priceSecondHande = 50;
    showTheColor(){
        return "The color is Red"
    }
    #showTheOwnerName(){
       return (this.#ownerName)
    }
    showThePrice(){
        console.log("This is inside showPrice for value of owner: ",  this.#showTheOwnerName())
        return (this.#price)
    }
 }


 let myFirstTrainer = new Trainers("Ellie",2023,"Nike",100);
 console.log(myFirstTrainer)
 console.log("PRICE",myFirstTrainer.showThePrice())

// let mySecondTrainer = new Trainers("cedric", 2022, "Nike", 2000)
// console.log(mySecondTrainer)
