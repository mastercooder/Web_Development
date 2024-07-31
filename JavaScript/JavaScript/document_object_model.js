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


console.log("\n");
console.log("   Properties  ");
console.log("---------------");
console.log("\ni. tagName");
console.log(p_tagName.tagName);

console.log("\nii. innerName");
let p_innerName = document.querySelector("#p_innerName");


console.log("\niii. innerHTML");
let p_innerHTML = document.querySelector("#p_innerHTML");




console.log("\n");
console.log("       Practice Set        ");
console.log("---------------------------");
console.log("\nAns1")
let ans1 = document.querySelector("#ans1_h");
console.dir(ans1.innerText);
ans1.innerText = ans1.innerText + " from Tejesh Patel"
console.log("Changed the Name")

console.log("\nAns2");
let ans2 = document.querySelectorAll(".div_q2");
console.log(ans2);
for(div of ans2){
    div.innerText = "This Div was changed";
}


console.log("\n");
console.log("       Attributes      ");
console.log("-----------------------");
console.log("\nGet Attribute Value");
let display_att = document.querySelector(".att_val");
console.log(display_att);
let attribute_val = display_att.getAttribute("class");
console.log(attribute_val);

console.log("\na. Change Attribute Value");
let editAttDisplay = document.querySelector(".default_value");
let currentAttributeValue = editAttDisplay.getAttribute("class");
console.log(currentAttributeValue);

console.log("\nb. Edit Attribute Value")
editAttDisplay.setAttribute("class", "value_changed");
let newValue = editAttDisplay.getAttribute("class");
console.log(newValue);



console.log("Style Change");
let styleVal = document.querySelector(".change_style");
console.log(styleVal);
styleVal = styleVal.style.backgroundColor = "green";


console.log("\nc. Insert Elements");
let newButton = document.createElement("button");
newButton.innerText = "Button";
console.log(newButton);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>New Heading</i>"

let insertButton = document.querySelector(".create_but");
let insertHeading = document.querySelector(".create_but");

// Insert At Start
insertButton.prepend(newButton); 
insertHeading.prepend(newHeading); 

// Insert At End
insertButton.append(newButton); 
insertHeading.append(newHeading); 

// Before an Element
insertButton.before(newButton); 
insertHeading.before(newHeading); 

// After an Element
insertButton.after(newButton);
insertHeading.after(newHeading);

console.log("Remove Element")
let removePara = document.querySelector("#remove");
removePara.remove();
newHeading.remove();


console.log("\n");
console.log("       Practice Set        ");
console.log("---------------------------");
// Q1
let ps2_answer1 = document.createElement("button");
ps2_answer1.innerText = "Click me!";
ps2_answer1.style.backgroundColor = 'red';
ps2_answer1.style.color = 'white';

let insert_ps2_a1 = document.querySelector(".ps2_ans1");
insert_ps2_a1.prepend(ps2_answer1);

// Q2
let para = document.querySelector(".ps2_p");
para.classList.add("ps2_newClass");
