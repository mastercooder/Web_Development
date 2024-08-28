console.log("\n");
console.log("           Events in JavaScripts           ");
console.log("-------------------------------------------");

console.log("\n1. Inline Event Handlers")

console.log("\n2. Event Handeling in JS");
// button 1
let btn1 = document.querySelector("#but1");
btn1.onclick = () =>{
    console.log("Button 1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

// button 2
let btn2 = document.querySelector("#but2");
btn2.ondblclick = () =>{
    console.log("Button 2 Was clicked 2 times");
}

// Box Div
let box_div = document.querySelector(".eij_div1");
box_div.onmouseover = () => {
    console.log("You mouse curse is over Box");
}


console.log("\n3. Event Objects\n")
let eo_btn = document.querySelector("#eo_but1");
eo_btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

let eo_div = document.querySelector(".eo_div1");
eo_div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}


console.log("\n4. Event Listeners");
let el_btn1 = document.querySelector("#el_btn1");
el_btn1.addEventListener("click", () =>{
    console.log("Button Was Clicked Handel - 1");
});

let el_btn2 = document.querySelector("#el_btn2");
el_btn2.addEventListener("click", (evt) =>{
    console.log(evt);
});

console.log("Remove Event Listeners");
// const hantler2 = () =>{
//     console.log("Button Was Clicked Handel - 2");
// }

// el_btn1 = addEventListener("click", hantler2);
// el_btn1.removeEventListener("click", hantler2); -> THis is used to remove 


console.log("\n");
console.log("       Practice Set        ");
console.log("---------------------------");
let mode = document.querySelector('#ans1');
let currentMode = 'light';
mode.addEventListener("click", () => {
    if(currentMode === 'light'){
        currentMode = 'dark';
        let color = document.querySelector('body');
        color.classList.add("dark_mode");
        color.classList.remove("light_mode");
    } else{
        currentMode = 'light';
        color = document.querySelector('body');
        color.classList.add("light_mode")
        color.classList.remove("dark_mode");
    }
});