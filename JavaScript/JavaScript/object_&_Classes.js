console.log("                                          Object & Classes                                     ");
console.log("------------------------------------------------------------------------------------------------")
console.log("");

console.log("   Function Under Object   ");
console.log("---------------------------");
console.log("student - fullName, marks, printMarks()    ||      employe - calTax, calTax2")
const student = {
    fullName: "Tejesh Patel",
    marks: 80,
    printMarks: function(){
        console.log("Marks = ", this.marks); // --> this refers to this Marks
    },
};

const employe = {
    calTax(){
        console.log("Tax rate is 10%"); // --> 1st Method of Defining function under object.
    },
    calTax2: function(){
        console.log("Tax rate is 10%"); // --> 2nd Method of Deficing function under object.
    },
};

// ------------------------------------------------------------------------------------------------------------

console.log("");
console.log("   ProtoType in JS     ");
console.log("-----------------------")
console.log("tejeshJayesh - salary")
const tejeshJayesh = {
    salary: 50000,
};
tejeshJayesh.__proto__ = employe; // This is used for Proto type to access another object functio to another object function

// If an object has same object & prototype then object will be considered rather than prototype.

// ------------------------------------------------------------------------------------------------------------

console.log("");
console.log("           Classes in JS           ");
console.log("-----------------------------------");
// It is like a BLUE PRINT for Objects
console.log("toyotaCar - start, stop, setBrand | fortuner, lexus")

class toyotaCar{
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Start");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new toyotaCar();
let lexus = new toyotaCar();
fortuner.setBrand("Fortuner");
lexus.setBrand("Lexus");

console.log("");
console.log("   Constructor is JS   ");
console.log("-----------------------");
console.log("toyotaCar - start, stop, setBrand | fortuner, lexus")

class bmwCar{
    constructor(brand, milagage){
        console.log("New Car Created");
        this.brandName = brand;
        this.milagage = milagage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Start");
    }
}

let BMW_M4 = new bmwCar("BMW", 5);
console.log(BMW_M4);
let BMW_M5 = new bmwCar("BMW", 4);
console.log(BMW_M5);

console.log("");
console.log("   Inheritance in JS   ");
console.log("-----------------------");
console.log("class - Parent, Child, Person, Engineer, Doctor    ||  fun- eat, sleep, work   ||  tejesh, suraj")
class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{};
let obj = new Child;

class Person{
    constructor(){
        this.species = "Homo Sapiens";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problums. Build Things");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}

let tejesh = new Engineer;
let suraj = new Doctor;


console.log("");
console.log("   Super Keyword   ");
console.log("-------------------");