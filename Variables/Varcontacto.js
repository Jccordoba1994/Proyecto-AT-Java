
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

let consultas = JSON.parse(localStorage.getItem("consultas")) || [];

class registroConsulta {
    constructor (nombre, telefono, email, consulta) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.consulta = consulta;
    }
}

function validarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombreyapellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let consulta = document.getElementById("comentarios").value;

    let datos = (new registroConsulta (nombre, telefono, email, consulta));
    consultas.push(datos);
    localStorage.setItem("consultas",JSON.stringify(consultas));

    formulario.reset ();
};

let btn = document.getElementById("enviar");

btn.addEventListener("click", () => {
    Swal.fire({
        title: "Muchas gracias!",
        text: "Tu consulta ha sido enviada",
        icon: "success",
        confirmButtonText: "Salir",
    })
})






    
