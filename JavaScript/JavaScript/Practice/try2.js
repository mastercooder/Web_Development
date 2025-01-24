function sum(a, b){
    return a+b;
}

document.getElementById('q2').addEventListener('submit', function(evt){
    evt.preventDefault();

    let a = parseInt(document.getElementById('q2a').value, 10);
    let b = parseInt(document.getElementById('q2b').value, 10);
    let result = sum(a, b);
    document.getElementById('result').innerText = "Result: "+result;    
})