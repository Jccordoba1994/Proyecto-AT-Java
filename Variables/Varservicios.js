const abrirModal1 = document.querySelector(`.abrirmodal1`);
const abrirModal2 = document.querySelector(`.abrirmodal2`);
const abrirmodal3 = document.querySelector(`.abrirmodal3`);
const abrirmodal4 = document.querySelector(`.abrirmodal4`);
const modal1 = document.querySelector(`.modal1`);
const modal2 = document.querySelector(`.modal2`);
const modal3 = document.querySelector(`.modal3`);
const modal4 = document.querySelector(`.modal4`);
const cerrarModal1 = document.querySelector(`.modal__close1`);
const cerrarModal2 = document.querySelector(`.modal__close2`);
const cerrarModal3 = document.querySelector(`.modal__close3`);
const cerrarModal4 = document.querySelector(`.modal__close4`);

abrirModal1.addEventListener (`click`, (e) => {
    e.preventDefault();
    modal1.classList.add(`modal--show1`);
});

cerrarModal1.addEventListener(`click`, (e) => {
    e.preventDefault();
    modal1.classList.remove(`modal--show1`)
});

abrirModal2.addEventListener (`click`, (e) => {
    e.preventDefault();
    modal2.classList.add(`modal--show2`);
});

cerrarModal2.addEventListener(`click`, (e) => {
    e.preventDefault();
    modal2.classList.remove(`modal--show2`)
});

abrirmodal3.addEventListener (`click`, (e) => {
    e.preventDefault();
    modal3.classList.add(`modal--show3`);
});

cerrarModal3.addEventListener(`click`, (e) => {
    e.preventDefault();
    modal3.classList.remove(`modal--show3`)
});

abrirmodal4.addEventListener (`click`, (e) => {
    e.preventDefault();
    modal4.classList.add(`modal--show4`);
});

cerrarModal4.addEventListener(`click`, (e) => {
    e.preventDefault();
    modal4.classList.remove(`modal--show4`)
});

class Clientes {
    constructor (nombre, apellido, edad, teléfono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = teléfono;
    }
}

let numero = parseInt (prompt ("ingrese cantidad de alumnos"));

let cliente = [] ;

function registroClientes() {
    for (let i = 0; i < numero ; i++) {
        let nombre = prompt ("Cliente " + (i+1) + " de " + numero + ". Ingrese su nombre");
        let apellido = prompt ("Ahora su apellido");
        let edad = parseInt (prompt("Tu edad"));
        let telefono = parseInt (prompt("Un teléfono por favor"));
    
        let datos = (new Clientes (nombre, apellido, edad, telefono));
        cliente.push(datos);
    }
}
registroClientes (cliente);

const tipoPrecio = [
    {tipo: "personalizado", días: 1, precio: 3500},
    {tipo: "personalizado", días: 2, precio: 5000},
    {tipo: "personalizado", días: 3, precio: 6500},
    {tipo: "dos personas", días: 1, precio: 3000},
    {tipo: "dos personas", días: 2, precio: 4500},
    {tipo: "dos personas", días: 3, precio: 5500},
    {tipo: "tres personas", días: 1, precio: 2700},
    {tipo: "tres personas", días: 2, precio: 4000},
    {tipo: "tres personas", días: 3, precio: 5000},
    {tipo: "grupal", días: 1, precio: 2500},
    {tipo: "grupal", días: 2, precio: 3500},
    {tipo: "grupal", días: 3, precio: 4500},
];

/* localStorage.setItem("Entrenamiento", JSON.stringify([{tipo: "Personalizado", precio: 5500}]))

let cotizacion = JSON.parse(localStorage.getItem("Entrenamiento")) || [];
console.log(cotizacion); */