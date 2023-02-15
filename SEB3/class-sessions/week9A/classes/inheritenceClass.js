class Person {
    name;
    age;
    surname;
    address;
    telephone;
    relativeNumber;
    constructor(nameValue, ageValue){
        this.name = nameValue;
        this.age = ageValue
    }
    print() {
        return(`Name: ${this.name} Age: ${this.age}`);
    }
}

// let firstPerson = new Person();
// firstPerson.name = "John"
// firstPerson.age = 20
// console.log(firstPerson)


class Employee extends Person{
    company;
    manager;
    constructor(name, age, managerNameValue){
        super(name, age)
        this.manager = managerNameValue;
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}



let newEmployee = new Employee("Brad", 29, "someone")
newEmployee.company = "start up"
console.log(newEmployee);
