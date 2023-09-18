let valueTarjetaEjemplo = document.getElementById("#tarjetaEjemplo")
const boton = document.querySelector(".btn-primary");
const parrafo = document.querySelector("#parrafo");
console.log(valueTarjetaEjemplo)


boton.addEventListener("click", () => {
parrafo.textContent.replace = valueTarjetaEjemplo;
});
