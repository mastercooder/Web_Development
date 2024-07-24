console.log("Hello");

// Types of Data Type
Name = "Tejesh Patel"; // String
Age = 19; // Intger
Salary = 80000.00; // float
isFollow = true; // bollen
y = undefined; // Don't know the value 
x = null; // Empty value
num = BigInt("23452523"); 
sym = Symbol("@");

console.log("Name =", Name);
console.log("Age =", Age);
console.log("Salary =", Salary);
console.log("isFollow =", isFollow);
console.log("y =", y); 
console.log("x =", x);
console.log("BigInt =", num);
console.log("Symbol =", sym);


// var, let and const
console.log("var");
console.log("var is not used now as per the new rules")

console.log("let");
let fullName = "Tejesh Patel";
let a;
console.log("fullName =", fullName);
console.log("a =", a);
// blocks
{
    let a = "A";
    console.log("Block A =", a);
}
{
    let a = "B";
    console.log("Block B =", a);
}

console.log("const");
const PI = 3.14;
console.log("PI =", PI);
// const b;
// console.log("b =", b); // This will show an error


// Object
const Student = {
    name: "Tejesh Patel", 
    age: 19,
    cgpa: 7.5,
    isPass: true,
};
console.log("Name =", Student.name);
Student.cgpa = Student.cgpa + 0.5;


// Practice Set 
// Q1. 
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 250,
};

// Q2
const profile = {
    userName: "@tejeshpatel",
    isFollow: true,
    message: "yes",
    post: 195,
    followers: 500,
    following: 55,
    name: "Tejesh Patel",
    tacc: null,
    Bio: "Text",
};