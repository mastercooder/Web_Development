console.log("                  Arrays");
console.log("-------------------------------------------\n");
console.log("\n");

// Create Array
let marks = [76, 86, 34, 87, 75];
console.log("Marks =", marks);
console.log("Marks Length =", marks.length);

let heroes = ['Iron Man', 'Thor', 'Sypder Man', 'Ant Man', 'Capton America', 'HockEye', 'Scarlet Witch'];
console.log("Heroes = ", heroes);

console.log("\n");
console.log("\n   Array Indices   ");
console.log("--------------------");
console.log("marks[0] = ", marks[0]);
console.log("marks[10] = ", marks[10]); // Not in Array

// Edit In Array
marks[2] = 88;
console.log("Edited = ", marks[2]);

console.log("\n");
console.log("   Loops in Array");
console.log("----------------------");
console.log("\ni. For Loop");
for(let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
}

console.log("\n");
console.log("ii. for-of");
for(let hero of heroes){
    console.log(hero.toUpperCase());
}



console.log("\n");
console.log("   Practice Set    ");
console.log("--------------------");

console.log("\nQ1. For the given Array with Marks of student [85, 97, 44, 37, 76, 60]. Find the Average Marks of Entire Class?\nAns.");
let ClassMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(i of ClassMarks){
    sum = sum+i;
}
let average = sum/ClassMarks.length;
console.log(`\nAverage = ${sum} / ${ClassMarks.length} = ${average}`);

console.log("\n");
console.log("Q2. For the Given Array of 5 item -> [250, 645, 300, 900, 50]. All item have an offer of 10% OFF on them. Change the Array to store final price after applying offer.\nAns.");
let price = [250, 645, 300, 900, 50];
let discount = [];
let finalAmount = [];
for(let i = 0; i<price.length; i++){
    discount[i] = price[i]*10/100;
    finalAmount[i] = price[i] - discount[i];
}
for(let i in finalAmount){
    console.log(`\n${price[i]} - ${discount[i]} = ${finalAmount[i]}`);
}


console.log("\n");
console.log("   Array Methords  ");
console.log("--------------------")

let foodItems = ['Apple', 'Orange', 'Banana', 'Lichi', 'Mango'];
let foodPrice = [86, 64, 74, 23, 74];
let fastFood = ['Piza', 'Chips', 'Paties'];

// Push Operation
foodItems.push('Chips');
console.log("\ni. Push");
for(food of foodItems){
    console.log(food);
}
console.log("Size = ", foodItems.length)

// pop Operation
foodItems.pop('Chips');
console.log("\nii. pop");
for(food of foodItems){
    console.log(food);
}
console.log("Size = ", foodItems.length)

// toString Operation
console.log("\niii. toString");
console.log("Normal");
console.log(foodPrice);
console.log("toString");
console.log(foodPrice.toString());

// concat Operation
console.log("\niv. Concat");
let allFood = foodItems.concat(foodPrice, fastFood);
console.log(allFood);

// unShift || Shift Opeartion
console.log("\nv. unShift || shift");
console.log("a. unShift");
foodItems.unshift('papaiya');
console.log("Added papaiya", foodItems);
console.log("b. shift");
foodItems.shift('papaiya');
console.log("Deleted", foodItems);

// slice || splice Method
console.log("\nvi. slice || splice")
console.log("a. slice"); // No Change in Orignal Array
console.log(foodPrice.slice(0, 2));
console.log("b. Splice"); // Change in Orignal Array
console.log("Orignal Price = ", foodPrice);
let spliceAdd = foodPrice.splice(2, 0, 88);
console.log("Add = ", foodPrice);
let spliceDelete = foodPrice.splice(2, 1);
console.log("Normal Delete = ", foodPrice);
spliceDelete = foodPrice.splice(4);
console.log("1 number Delete = ", foodPrice);
let spliceReplace = foodPrice.splice(3, 1, 90);
console.log("Replace = ", foodPrice);




console.log("\n");
console.log("       Practice Question       ");
console.log("-------------------------------");

console.log("\nQ1. Create an array to store companies -> 'bloombering', 'Microsoft', 'ubar', 'IBM', 'Netflix', 'Google'.\na. Remove the first company from the array.\nb. Remove Obar and add Ola in place of it.\nc. Add Amazon at the end.\nAns.");
let company = ['bloombering', 'Microsoft', 'ubar', 'IBM', 'Netflix', 'Google'];
let Q1a = company.shift();
console.log("\nAns a. ", company);
let Q1b = company.splice(1, 1, 'OLA');
console.log("\nAns b. ", company);
let Q1c = company.push('Amazon');
console.log("\nAns c. ", company);