import validator from './validator.js';

console.log(validator);
const comprarBtn = document.getElementById("buys");

//Se crea evento para que aparezca un mensaje cuando se precione el boton comprar
comprarBtn.addEventListener("click", function(){
  const popUp = document.getElementById("pop-up");
  popUp.style.display = "block";
});
















