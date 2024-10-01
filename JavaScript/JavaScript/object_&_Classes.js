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
    constructor(lang){
        this.species = "Homo Sapiens";
        this.lang = lang
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Working on Backend");
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

class web extends Person{
    constructor(language){
        super(language) // To call parent class constructor
        this.language = language;
    }
    name(){
        super.work(); // To call parent Class method
        console.log("JavaScripts");
    }
}

let skey = new web("Python");
console.log("");
console.log("");
console.log("------------------------------------------------------------------------------------------------");
console.log("                                           PRACTICE SET                                         ");
console.log("                                         ----------------                                       ");
console.log("");
console.log("Q1. You are creating a website for your college. Create a class User with 2 properties, name & emil. It also has a method called viewData() that allows user to view website data. \nAns.");
console.log("Parent Class - user \nMethod - viewData()\nStudent - Student1,2 || Teacher - teacher1");

let DATA = "This is the Data";

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    vewData(){
        console.log("Data = ", DATA);
    }
}

let student1 = new user("Tejesh", "tejesh.patel@gamil.com");
let student2 = new user("Jayesh", "jayesh.patel@gamil.com");
let teacher1 = new user("Teacher1", "teacher.sir@gamil.com");

console.log("")
console.log("Q2. Create a new class Admin which inherts from User. Add a new method called editData to Admin that allows it to edit website data ? \nAns.");
console.log("Parent Class - Admin extends from User\nMethod - editData()")

class Admin extends user{
    editData(){
        super.vewData();
        DATA = "Data Changed"
    }
}

let ans2 = new Admin("MasterCoder", "master@gamil.com");







console.log("");
console.log("   Error Handling  ");
console.log("-------------------");

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a+b);
try{
    console.log("a + c = ", a+c);
} catch{
    console.log("Something Went Wrong!");
}
console.log("a + b = ", a+b);




