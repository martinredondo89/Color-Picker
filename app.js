let valueTarjetaEjemplo = document.getElementById("tarjetaEjemplo")
const boton = document.getElementById("boton");
let parrafo = document.querySelector("#parrafo");



boton.addEventListener("click", cambiarColor(valueTarjetaEjemplo));

function cambiarColor() {
    console.log(valueTarjetaEjemplo.value);
    parrafo.textContent = valueTarjetaEjemplo.value;
}