console.log("                    Lecture 3");
console.log("--------------------------------------------------");

console.log("        Loops");
console.log("------------------------");
// Print 5 time you name
for(let i = 1; i<=5; i++){
    console.log("Tejesh Patel");
}

// Calculate sum of n natural numbers
// let num = prompt("Enter the number: ");
let num = 5;
let sum = 0;
for(let i = 1; i<=num; i++){
    sum += i;
}
console.log(sum);

console.log("    Infinite Loop");
console.log("------------------------");
// for(let i = 1; i>0; i++){
//     console.log(i);
// }


console.log("      While Loop");
console.log("------------------------");
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


console.log("     Do-While Loop");
console.log("------------------------");
let j = 1;
do{
    console.log(j);
    j++;
}while(j<=5)


console.log("     for-of loop");
console.log("------------------------");
let str = "tejeshpatel";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("Size of String is ", size);


console.log("     for-in Loop");
console.log("------------------------");
// used in objects

let student = {
    name: "Tejesh",
    age: 19,
    cgpa: 7.5,
    pass: true,
};

for(let i in student){
    console.log("key = ", i, "value =", student[i]);
}



console.log("     Practice Set");
console.log("------------------------")

console.log("Q1. Print all even number from 0 to 100")
for(let i = 0; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}

console.log("Q2. Create a game where you start with any random game number. Ask the user keep guessing the game number until user enter the corrent value.");
let gnum = 30;
// let user = prompt("Enter the number: ");
let user = 30;
while(user != gnum){
    user = prompt("Guess Again: ");
}
console.log("Correct Guess");




console.log("          Strings");
console.log("-------------------------------")

let userName = 'Tejesh';

// Length of String 
console.log(userName.length);

// String Place
console.log(userName[0]);


// Template Literate 
let specialString = `This is a Template Literate`;
console.log(specialString);
// Ex



// String Interpolation
let obj = {
    name: 'Keybord',
    price: 2000,
};
// This is the correct use of Templat Literate || it act like f sting in python
console.log(`Object ${obj.name} Price ${obj.price}`);

// Escape Characters
console.log(" Hello, \n How are you"); // next line
console.log("Hello \t How are you"); // used for gaving tap

// String Methords || Function
let a = "masterCoder";
console.log(a.toUpperCase()); // to upper case
console.log(a.toLowerCase()); // to lower case
let b = "master   coder";
console.log(a.trim());

// Print a selected chuck
let c = 'abcdefg';
console.log(c.slice(0, 4));

// Join two string
let d1 = 'hey';
let d2 = 'there';
let d3 = d1.concat(d2);
console.log(d3);

// Replace Words of String
let e = 'How are you';
console.log(e.replace("How", "Where"));

// Charactere Print
let f = 'Hello';
console.log(f.charAt(3));



console.log("      Practice Set");
console.log("-------------------------");

console.log("Q1. Prompt the user to enter their full name. Generate a username for them based on the input Start username with @, followed by there full name and ending with the fullname length.");
console.log("e.g., suer name = 'tejeshpatel', username shoud be '@tejeshpatel_05");

let pName = prompt("Enter you name: ");
let pUserName = '@' + pName + "_" + pName.length;
console.log("UserName ", pUserName);