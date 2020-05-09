// Canvas and button Declarations
let canvas = document.querySelector('.canvas');

let swapColor = function(event){
     canvas.style.backgroundColor = event.target.style.backgroundColor;
}

let button1 = document.getElementById('color1');
let button2 = document.getElementById('color2');
let button3 = document.getElementById('color3');
button1.style.backgroundColor = 'red'
button2.style.backgroundColor = 'blue'
button3.style.backgroundColor = 'green'

button1.addEventListener('click',swapColor)
button2.addEventListener('click',swapColor)
button3.addEventListener('click',swapColor)


//Input hash swap
let input = document.getElementById('input').addEventListener('keyup',(event)=>{
     canvas.style.backgroundColor = event.target.value;
});


