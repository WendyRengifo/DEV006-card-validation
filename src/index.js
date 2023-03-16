// import validator from './validator.js';

// console.log(validator);

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")

const validarFormulario = (e) => {
  switch (e.target.name) {
  case "card":
        
    break;

  case "seguridad":
        
    break;

  case "fecha":
        
    break;
  }
    
}

inputs.forEach((input) => {
  input.addEventListener(`keyup`, validarFormulario);
  input.addEventListener(`blur`, validarFormulario);
});

formulario.addEventListener(`submit`, (e) => {
  e.preventDefault();
});


