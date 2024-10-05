console.log("")
console.log("--------------------------------------------------------------------------------------------------------------------------");
console.log("                                            Calbacks Promises & Async Await                                               ");
console.log("                                           ---------------------------------                                              ");
console.log("")

console.log("       Sync in JS      ");
console.log("-----------------------");
console.log("")

console.log("Set Time Out")

console.log("i. Set Time Normal");
function hello(){
    console.log("Normal Output");
}
setTimeout(hello, 1);

console.log("ii. Set Time in Function");
setTimeout(() => {
    console.log("Function Output");
}/* ,Time */);
console.log("");


console.log("       CallBack        ");
console.log("-----------------------");
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}

calculator(5, 5, sum);
console.log("");

console.log("CallBack Hell"); // Nested call back 
console.log("callBack(data)");

function callBack(dataId){
    // 2s For Searching
    setTimeout(() =>{
        console.log("Data = ", dataId);
    }/* ,Time */);
}
console.log("");

console.log("WAP to wait 2s and print Data Coping... then again wait 2s and print Done!");
function getData(data, getNextData){
    setTimeout(() =>{
        console.log(data);
        if(getNextData){
            getNextData();
        }
    } /* ,Time */);
}
getData("Data Coping...", () =>{
    getData("Almost Done...", () =>{
        getData("Done!");
    });
});
// The Above code is an Exaple of callBack Hell
console.log("");

console.log("       Promises        ");
console.log("-----------------------");
let promise = new Promise((resolve, reject) =>{
    console.log("I am a Promise")
    resolve("sucess");
    // reject("Something Went Wrong");
});

// Example
console.log("getPromise(pData, pNextData)")
function getPromise(pData, pNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(pData);
            resolve("success");
            if(pNextData){
                pNextData();
            } else{
                reject("error");
            }
        }/* ,Time */);
    });
}
console.log("");

console.log("Use Promises");
console.log("resolve -> Proimse.then");
console.log("reject -> Proimse.catch");

const usePromiseThis = () =>{
    return new Promise((resolve, reject) =>{
        console.log("This is a Promise");
        resolve("successfully");
    });
}
let promiseValue = usePromiseThis();
promiseValue.then((res) =>{
    console.log("Promise Fulfilled", res);
});

const usePromiseCatch = () =>{
    return new Promise((resove, reject) =>{
        console.log("This is the Second Promise");
        reject("Unsuccessfully");
    });
}
promiseValue = usePromiseCatch();
promiseValue.catch((err) =>{
    console.log("Promise Fulfilled ", err);
})

console.log("Chaning")
function asyncFunc1(aData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(aData);
            resolve("success");
        }, 3000);
    });
}
function asyncFunc2(aData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(aData);
            resolve("success");
        }, 3000);
    });
}

asyncFunc1(1).then((res)=>{
    console.log("Scanning Data1...");
    return asyncFunc2(2);
}).then((res)=>{
    console.log("Scanning Data2...");
    return asyncFunc1(3);
}).then((res)=>{
    console.log("Scanning Data3...");
    console.log(res);
})

// Types of Printing The Data

// asyncFunc1(1).then((res)=>{
//     console.log("Scanning Data1...");
//     console.log(res);
//     asyncFunc2(2).then((res)=>{
//         console.log("Scanning Data2...");
//         console.log(res);
//     })
// })

// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log(res);
//     console.log("Featching Data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) =>{
//         console.log(res);
//     })
// })


console.log("       Async-Await     ");
console.log("-----------------------");

async function asyncFun(){ // async function is used to make any function async
    console.log("Hello Wrold!");
}

function asyncApi(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await asyncApi(); //1st Call
    await asyncApi(); //2nd Call
}

function asyncFunc1(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data = ", data);
            resolve(200);
        }, 2000);
    });
}
async function af2(){
    console.log("Scanning Data1....");
    await asyncFunc1(1);
    console.log("Scanning Data2....");
    await asyncFunc1(2);
    console.log("Scanning Data3....");
    await asyncFunc1(3);
}
console.log("");

console.log("IIFE: Immediately Invoked Function Expression");
// It automatically starts running without calling || Can be used only once.
(async function(){
    console.log("Scanning Data1....");
    await asyncFunc1(1);
    console.log("Scanning Data2....");
    await asyncFunc1(2);
    console.log("Scanning Data3....");
    await asyncFunc1(3);
})();