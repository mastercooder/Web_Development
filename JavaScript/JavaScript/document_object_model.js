console.log("               Document Object Model               ");
console.log("---------------------------------------------------");

// By default object in JS
console.log(window);

// From here we can access HTML, CSS
console.log(document)

// document.body.style.background = "red";
// document.body.childNodes[2].innerText = 'Topic1: Start Coding With Us';

console.dir(document.body)


console.log("\n");
console.log("       Manipulation in DOM     ");
console.log("-------------------------------");

console.log("\ni. Access by ID");
let id_identify = document.getElementById("id_identify");
console.log("BY Console.log");
console.log(id_identify); // Print the whole line
console.log("BY Console.dir");
console.dir(id_identify); // Get the object

console.log("\nii. Access by Class");
let class_identify = document.getElementsByClassName("class_identify");
console.log("BY Console.log");
console.log(class_identify);
console.log("BY Console.dir");
console.dir(class_identify);

console.log("\niii. Access by Tag");
let tag_identify = document.getElementsByTagName("p");
console.log("BY Console.log");
console.log(tag_identify);
console.log("BY Console.dir");
console.dir(tag_identify);

console.log("\niii. Access by Tag");
let querySelector = document.querySelector("p"); // Single 
let querySelectorAll = document.querySelectorAll("p"); // All
console.log("BY Console.log");
console.log(querySelector);
console.log("BY Console.dir");
console.dir(querySelectorAll);