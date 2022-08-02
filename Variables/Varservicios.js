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

/* function cotizacion (alumnos, dias) {
    for (const precio of tipoPrecio) {
        if (precio.personas === alumnos.value && precio.dias === dias.value) {
            return precio.valor
        }
    }
} */

/* function cotización(alumnos, dias) {
    arrayObjeto.find(elemento) => {
        return 
    }
    
}

boton.addEventListener("click", (e) => {
    e.preventDefault ();
    alert (cotizacion(alumnos.value, dias.value))
}) */

const lista = document.getElementById("lista");

const traerDatos = async () => {
try {
    const resp = await fetch("../Datos.json");
    const data = await resp.json();

    data.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${producto.personas}</h2>
            <p>${producto.dias}</p>
            <p>codigo${producto.valor}</p>
            <hr/>
        `;

        lista.append(li);
    });
} catch (error) {
    const mensaje = document.createElement("div");
    mensaje.innerHTML = `Error al cargar la información ${error}`;
    document.body.append(mensaje);
}
};

traerDatos();