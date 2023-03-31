import validator from './validator.js';


const comprarBtn = document.getElementById("buys");
const verificaBtn = document.getElementById("verificar");
const  NumeroTarjetaInput = document.querySelector("#tarjeta");
const popUp = document.getElementById("pop-up");


//Se llama la funcion maskify  para enmascarar los numeros que se ingresen al input 

/*NumeroTarjetaInput.addEventListener("keyup", function(){
  const numeroT = NumeroTarjetaInput.value;
  const numeroEnMascarado = validator.maskify(numeroT);

  NumeroTarjetaInput.value = numeroEnMascarado;
});*/


//Aqui le damos un limite de numeros que debe recibir el input

NumeroTarjetaInput.addEventListener("input", function(){
  const valor = NumeroTarjetaInput.value;
  const maximo = 16;

  if(valor.length > 16){
    NumeroTarjetaInput.value = valor.slice(0,10);
  }

  if(valor.length > maximo){
    NumeroTarjetaInput.value = valor.slice(0, maximo);
  }

  if(valor.length === maximo){
    NumeroTarjetaInput.setAttribute("maxlength", maximo);
  }else{
    NumeroTarjetaInput.removeAttribute("maxlength");
  }

});

//Se crea evento para que aparezca un mensaje cuando se precione el boton comprar
comprarBtn.addEventListener("click", function(){
  function borrarInput(){
    document.getElementById("tarjeta").value = "";
    document.getElementById("mes").value  = "";
    document.getElementById("year").value = "";
    document.getElementById("codigo").value = "";
  }
  validarTarjeta();
  borrarInput();
});


verificaBtn.addEventListener("click", function(){
  validarPedido();
})



//Aqui valida si la tarjeta es correcta o no a darle al boton 

function validarTarjeta(){
  const valor = NumeroTarjetaInput.value;
  const esValido = validator.isValid(valor);

  if(esValido){
    const mensaje = "Gracias por su compra";
    actualizarMensaje(mensaje);
  }else{
    const mensaje = "Ingrese una tarjeta valida";
    actualizarMensaje(mensaje);
  }

}

function actualizarMensaje(mensaje){
  popUp.innerHTML = mensaje;
}


function validarPedido(){
  const contenido = NumeroTarjetaInput.value;
  const valido = validator.isValid(contenido);


  if(valido){
    const pedido = "GTA5 Sera comprado con la tarjeta: ";
    const enmascararNum = validator.maskify(contenido);

    nuevoMensaje (pedido + enmascararNum);
  }

}

function nuevoMensaje(pedido){
  popUp.innerHTML = pedido;
}














