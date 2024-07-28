console.log("               Lecture 5: Function & Methods");
console.log("--------------------------------------------------------------------");
console.log("\n");

// Syntax 
// function function_name(param1, param2){
//     // do some work
// }

// making of function
function myFunction(){
    console.log("Hey Tejesh Patel here");
    console.log("Learning JavaScripts");
}

// Function Calling
myFunction();

// Some Examples
console.log("\nExample 1: Addition in Funtion");
function sumFun(x, y){
    console.log(`${x} + ${y} = ${x + y}`);
}
sumFun(5 ,5);

console.log("\nExample 2: Return in Function");
function returnFun(a, b){
    let c = a + b; // This variable are local variables
    console.log("Before Return");
    return c;
    console.log("After Return"); // This function will not run
}
let returnFunval = returnFun(5, 5);
console.log(returnFunval);

console.log("\nExample 3: Multiplication Function");
function MultiplicationFun(a, b){
    let c = a * b;
    return c;
}
let multival = MultiplicationFun(5, 5);
console.log("Multiplication = ", multival);


console.log("\n");
console.log("   Arrow Function  ");
console.log("-------------------");

// sum Arrow Function
arrowSum = (a ,b) =>{
    console.log(a + b);
}
arrowSum("Arrow Sum Function = ", 5, 5);

// Multiplication in Arrow-Function
const arrowMul = (a, b) =>{
    return a * b;
}
let arrowMulVal = arrowMul(5, 5);
console.log(`Arrow Multiplication = ${arrowMulVal}`);

// oneLiner
printHello = () => console.log("Hello");
// console.log(printHello);


console.log("\n");
console.log("       Practice Set        ");
console.log("---------------------------");
console.log("\nQ1. Create a function using 'function' keyword that takes a string as an argument & return the number of vowels in the String. \nAns.");
function countVovel(word){
    word = word.toLowerCase();
    for(let i = 0; i<word.length; i++){
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
            vovelcounter++;
        }
    }
    return vovelcounter;
}
let vovelcounter = 0;
// user = prompt("Enter the word: ");
user = 'Tejesh';
countVovel(user);
console.log(`You have ${vovelcounter} in ${user}`);


console.log("\nQ2. Create a Arrow function to perfrom the same task\nAns.");
countVovel = (word) => {
    word = word.toLowerCase();
    for(let i = 0; i<word.length; i++){
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
            arrowVovelcounter++;
        }
    }
    return vovelcounter;
}
let arrowVovelcounter = 0;
// arrowUser = prompt("Enter the word: ");
arrowUser = 'hello';
countVovel(arrowUser);
console.log(`You have ${arrowVovelcounter} in ${arrowUser}`);




console.log("\n");
console.log("\n");
console.log("       For-each Loop In Arrays     ");
console.log("-----------------------------------");

// Syntax
// variable.forEach(function function_name(param..){
//     // code here 
// })

// Only suppored by Arrays
// It exect each time in array. Suppose an array has 5 element then the array will work 5 time 
console.log("\n1. Normal Function")
let arr = [1, 2, 3, 4, 5];
arr.forEach(function displayArr(arr){
    console.log(arr);
})

console.log("\n2. Arrow Function");
arr.forEach((arr) => {
    console.log(arr);
});

console.log("\n3. All Prameters in for-each")
arr.forEach((val, idx, arr) => {
    console.log(`Value = ${val} || Index = ${idx} || Array = ${arr}`);
});

console.log("\nHiger Order Funciton are the function wich take an another function as a parameter or return any another function.");


console.log("\n");
console.log("       Practice Question       ");
console.log("-------------------------------");
console.log("\nQ1. For a given array of numbers, print the square of each value using foEach Loop\nAns.");

console.log("\n1. Method");
let numArr = [1, 2, 3, 4, 5];
let sqArr = [];
numArr.forEach((val) => {
    sqArr.push(val * val);
});
for(i of sqArr){
    console.log(i);
}

console.log("\n2. Method");
let calculateSquare = (num) => {
    console.log(num * num);
}
numArr.forEach(calculateSquare);


console.log("\n");
console.log("   Array Methods   ");
console.log("-------------------");
let methodArr = [1, 2, 3, 4, 5];
let newMetArr = [];

// It is used to create a new array
console.log("\n1. map");
newMetArr = methodArr.map((val) => {
    return val;
});
console.log("Map Array = ", newMetArr);

console.log("\n2. Filter");
console.log("Create a new array and filter all the even values out of it");
newMetArr = methodArr.filter((val) => {
    return val%2===0;
});
console.log("Filter = ", newMetArr);

// It is mostly used when we need to get only one output. Ex- sum, average etc.
console.log("\n3. Reduce");
// methodArr = [1, 2, 3, 4];
newMetArr = methodArr.reduce((res, cur) => {
    return res + cur;
});
console.log("Reduce = ", newMetArr);
newMetArr = methodArr.reduce((prev, curr) => {
    return prev > curr? prev : curr;
});
console.log("Biggest = ", newMetArr);



console.log("\n");
console.log("       Practice Questions      ");
console.log("-------------------------------");
console.log("\nQ1. We have given an array of student filter out of the marks of sutudent that score 90\nAns.");
let marksArr = [77, 34, 90, 34, 95, 12, 89];
let newArr = marksArr.filter((val) => {
    return val>=90;
})
console.log("Above 90 marks = ", newArr);

console.log("\nQ2. Take a number n as input from the user. create a array from 1 to n\nUse the reducer method to calculate sum of all number in Array\nUse the reducer method to calculate product of all numbers in the array");
let Quser = prompt("Enter any number: ");
let QnewArr = [];
for(let i = 0; i<Quser; i++){
    newArr[i] = i+1;
}
QnewArr = newArr.reduce((prev, cur) => {
    return prev + cur;
})
console.log("Ans a. ", QnewArr);

let fact = 1;
QnewArr = newArr.reduce((prev, cur) => {
    return prev * cur;
})
console.log("Factorial = ", QnewArr);
    
