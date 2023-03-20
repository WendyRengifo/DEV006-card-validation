import validator from './validator.js';

console.log(validator);



const crediCard = document.querySelector("[name=tarjeta]");
const mes = document.querySelector("[name=mes]");
const year = document.querySelector("[name=year]");
const cvc = document.querySelector("[name=cvc]");

const validadorFile = (e) => {
  const field = e.target;
  const filedValue = e.target.value;
  
  if(filedValue.length === 0){
    field.classList.add("invalid")
  }else{
    field.classList.remove("invalid")
  }
}

crediCard.addEventListener("blur", validadorFile);
mes.addEventListener("blur", validadorFile);
year.addEventListener("blur", validadorFile);
cvc.addEventListener("blur", validadorFile);



