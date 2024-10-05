console.log("");
console.log("--------------------------------------------------------------------------------------------------------------------------");
console.log("                                                      Fetch API                                                          ");
console.log("                                                     -------------                                                        ");
console.log("");

// AJAJ = Asynchronous JavaScripts And JSON
// HTTP = Hypertext Transfer Protocol
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara1 = document.querySelector("#factPara1");
const factPara2 = document.querySelector("#factPara2");
const factBtn = document.querySelector("#btn");


const getFact = async() =>{
    console.log("Featching 1st data....");
    let response = await fetch(URL);
    console.log(response); // JSON Format
    // json method()
    let data = await response.json(); // redable Format
    factPara1.innerText = data[0].text; // Usable Data
    console.log("Done...");
}

// Method 2
function getFact2(){
    console.log("Featching 2nd Data...");
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        factPara2.innerText = data[1].text;
    });
    console.log("Done...");
}

factBtn.addEventListener("click", getFact);
factBtn.addEventListener("dblclick", getFact2);