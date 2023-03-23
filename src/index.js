import validator from './validator.js';

console.log(validator);

const tarjeta = document.getElementById("tarjeta");
const comprarBtn = document.getElementById("buys");

//Se oculta los numeros de la tarjeta y se remplaza con #

tarjeta.addEventListener("input", function(){
  let valor = this.value;
    
  valor = valor.replace(/ /g, "").replace(/-/g, "");
    
  let oculto = "";
    
  for(let i = 0; i < valor.length - 4; i++){
    oculto += "#";
  }
    
  const visible = valor.slice(-4);
    
  this.value = oculto + visible;
});

//Se crea evento para que aparezca un mensaje cuando se precione el boton comprar
comprarBtn.addEventListener("click", function(){
  const popUp = document.getElementById("pop-up");
  popUp.style.display = "block";
});














