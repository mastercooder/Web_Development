function expect(val){
    return{
        toBe: function(expected){
            if(val==expected){
                return true;
            } else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected){
            if(val!=expected){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    };
}

document.getElementById('submit').addEventListener('submit', function(evt){
    evt.preventDefault();
    var val1 = parseInt(document.getElementById('userInput1').value, 10);
    var val2 = parseInt(document.getElementById('userInput2').value, 10);
    try{
        expect(val1).toBe(val2);
        console.log("Values are equal");
    } catch(error){
        console.log("error.message");
    }
});