// A JavaScript class is not an object.
// It is a template for JavaScript objects.

class Trainers {
   #brand = "Addidas";
   year = 2011;
   color = ["Red", "Yellow"]
   ownerName = "Tom"
   showTheColor(){
       return "The color is Red"
   }
   showTheName(){
     return (this.#brand)
   }
}


let myFirstTrainer = new Trainers();
myFirstTrainer.ownerName = "John"
console.log("This is myFirstTrainer:", myFirstTrainer)
// console.log("showThePrivateName", myFirstTrainer.showTheName());


let mySecondTrainer = new Trainers();
mySecondTrainer.ownerName = "Roham"
console.log("My second trainer class: " , mySecondTrainer)



