document.getElementById('userInput').addEventListener('submit', function(evt){
    evt.preventDefault();

    const query = parseInt(document.getElementById('input').value, 10);
    console.log(query);

    if(query===1){
        function createHelloWorld(){
            return function helloWorld(){
                document.getElementById('a1').innerHTML += 'Hello World!';
            }
        }
        const hello = createHelloWorld();
        console.log(hello());
    } else if(query===2){
        function createCounter(n){
            let count = n;
            return function(){
                count++;
            }
        }
        const counter = createCounter(5);
        console.log(counter());
        console.log(counter());
        console.log(counter());
    } else if(query===3){
        
    }
})