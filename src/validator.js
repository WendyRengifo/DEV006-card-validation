const validator = {
  isValid:(numeroTarjeta) =>  {
    // Convertir la cadena de dígitos en un array de números
    const numeros = numeroTarjeta.split('').map(Number);

    // Iterar por el array de números, comenzando por el penúltimo dígito y saltando de dos en dos posiciones
    let suma = 0;

    for(let i = numeros.length -2; i >=0; i-=2){
      let num = numeros [i] * 2;
      if(num > 9){
        num -= 9;
      }
      numeros[i] = num;
    }

    // Sumar todos los dígitos del array
    suma = numeros.reduce((total, num) => total + num);

    // Validar si la suma total es divisible por 10
    return suma % 10 === 0;
  },

  maskify: (numeroTarjetaMascara) =>{
    if (numeroTarjetaMascara.length <= 4) {
      return numeroTarjetaMascara;
    } else {
      const ultimosCuatroDigitos = numeroTarjetaMascara.substring(numeroTarjetaMascara.length - 4);
      const digitosEnmascarados = "#".repeat(numeroTarjetaMascara.length - 4);
      return digitosEnmascarados + ultimosCuatroDigitos;
    }
  }

}

export default validator;
