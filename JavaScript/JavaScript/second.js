console.log("   Second.js");
console.log("-----------------")

// <-- This is used for singlie line comments 
/* <-- This both are used for multi line comments --> */ 

console.log("Artimetic Operators");
let a = 5;
let b = 2;

console.log("a =", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Unary Opearator || Increment & Decrement Operators
console.log("PostIncrement");
a++ // Increment Operators 
console.log("a", a); 
b-- // Decrement Operators
console.log("b", b); 
console.log("PreIncrement");
console.log("a", ++a); 
console.log("b", --b); 


console.log("Assignment Operators");
a = 5;
b = 2;
console.log("a =", a, "& b = ", b);
a += 4; // a = a + 4
console. log("a = ", a);
a -= 4; // a = a - 4
console. log("a = ", a);
a *= 4; // a = a * 4
console. log("a = ", a);
a /= 4; // a = a / 4
console. log("a = ", a);
a %= 4; // a = a % 4
console. log("a = ", a);
a **= 4; // a = a ** 4
console. log("a = ", a);


console.log("Comparison Operators")
a = 5;
b = 2;
console.log("a =", a, " & b = ", b);
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a === b", a === b);
console.log("a !== b", a !== b);
console.log("a > b", a > b);
console.log("a >= b", a >= b);
console.log("a < b", a < b);
console.log("a <= b", a <= b);


console.log("Logical Operator")
a = 5;
b = 2;
console.log("a =", a, " & b = ", b);
let case1 = a>b;
let case2 = a==b;
console.log("case1 && case2 =", case1 && case2); // Locical AND
console.log("case1 || case2 =", case1 || case2); // Locical OR
console.log("!(case1 && case2) =", !(case1 && case2)); // Locical NOT


console.log("Conditional Statement");
let mode = "dark";
let color;
if(mode === "dark"){
    color = "white";
} else if(mode === "white"){
    color = "dark";
}
console.log(color);

if(mode == "dark") console.log(mode); // one liner

// If
// if(/* Condition */){
//     /* code */
// }

// if-else
// if(/* Condition */){
//     /* code */
// }else{
//     /* Code */
// }

// if-else if-else ladder
// if(/* Condition */){
//     /* code */
// }else if(/* Condition */){
//     /* Code */
// }else{
//     /* Code */
// }


console.log("Ternery Operators");
let age = 33;
age > 18 ? console.log("adult"): console.log("not adult");


// MDN Docs <---- This the online documentation for HTML, CSS, JS 


console.log("Switch Statement");
let query = 18;
age = 25; // Replace with actual age value

switch (true) {
  case age > query:
    console.log("Adult");
    break;
  default:
    // Handle other cases
}


console.log("                               Practice Quesiton");
console.log("-----------------------------------------------------------------------------");

console.log("Q1. Get User to input a number using prompt(Enter a number). Check the number is multiple of 5 or not");
let number = prompt("Enter any Number");
if(number%5===0){
    console.log("The Number is divisible by 5");
} else{
    console.log("The number is not divisible by 5");
}

console.log("Q2. Write a Program to give student grade according to there score ?")
let score = prompt("Enter you total score");
if(score>=80 && score<=100){
    console.log("Grade A");
}else if(score>=70 && score<=89){
    console.log("Grade B");
}else if(score>=60 && score<=69){55
    console.log("Grade C");
}else if(score>=50 && score<=59){
    console.log("Grade D");
}else if(score>0 && score<=49){
    console.log("Fail");
}else{
    console.log("Invalid Input Enter score 0 - 100")
}