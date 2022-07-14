var currentNumberSpan = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberSpan.innerHTML = currentNumber;
      
}  

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberSpan.innerHTML = currentNumber;
      
}