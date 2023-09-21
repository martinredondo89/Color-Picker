let inputTarjetaEjemplo = document.querySelectorAll("tarjetaEjemplo")
const boton = document.getElementById("boton");
let display = document.querySelector("#display");
console.log(inputTarjetaEjemplo.value);



boton.addEventListener("click", cambiarColor(inputTarjetaEjemplo[0].value));

function cambiarColor(color) {

    display.innerText =  color
}
/*
const sumar = (numA, numB) => numA + numB;
const buttonSuma = document.querySelector('#sumar');

buttonSuma.addEventListener('click', () => {
    const numeros = document.querySelectorAll('input');
    const display = document.querySelector('#display');

    const resultado = sumar(parseFloat(numeros[0].value), parseFloat(numeros[1].value));
    display.innerText = resultado;

})
*/