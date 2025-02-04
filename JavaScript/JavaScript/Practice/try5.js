function createCounter(init){
    let count = init;
    return{
        increment: function(){
            var temp = ++count;
            var output = document.getElementById('ans');
            output.innerText = temp;          
        }, 
        decrement: function(){
            var temp = --count;
            var output = document.getElementById('ans');
            output.innerText = temp;
        },
        reset: function(){
            count = init;
            var output = document.getElementById('ans');
            output.innerText = temp;
        }
    }
}

document.getElementById('form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let value = parseInt(document.getElementById('userInput').value, 10);
    if(!isNaN(value)){
        let counter = createCounter(value);
        
        document.getElementById('incrementBtn').addEventListener('click', counter.increment);
        document.getElementById('decrementBtn').addEventListener('click', counter.decrement);
        document.getElementById('resetBtn').addEventListener('click', counter.reset);
    
        document.getElementById('ans').innerText = `Value Updated to ${value}`;
    } else{
        document.getElementById('ans').innerText = `Please  enter a valid number`;
    }
});