const tipoPrecio = [
    {personas: 1, dias: 1, valor: 3500},
    {personas: 1, dias: 2, valor: 5000},
    {personas: 1, dias: 3, valor: 6500},
    {personas: 2, dias: 1, valor: 3000},
    {personas: 2, dias: 2, valor: 4500},
    {personas: 2, dias: 3, valor: 5500},
    {personas: 3, dias: 1, valor: 2700},
    {personas: 3, dias: 2, valor: 4000},
    {personas: 3, dias: 3, valor: 5000},
    {personas: 4, dias: 1, valor: 2500},
    {personas: 4, dias: 2, valor: 3500},
    {personas: 4, dias: 3, valor: 4500},
];


let alumnos = document.getElementById("numeroalumnos")
let dias = document.getElementById("numerodias")

let boton = document.getElementById("cotizar");

boton.addEventListener("click", (e) => {
    e.preventDefault ();
    let precios= tipoPrecio.find(elemento => {
        elemento.personas === $[alumnos.value] && elemento.dias === $[dias.value];
    });
    console.log(precios);