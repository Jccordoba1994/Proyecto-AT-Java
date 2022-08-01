
/*let clase = prompt ("¿Su entrenamiento sera? Personalizado, Dos personas, Tres personas o grupal (4 o + personas)").toLowerCase ();

while (clase !== "personalizado" && clase !== "dos personas" && clase !== "tres personas" && clase !== "grupal").toLowerCase () {
    clase = prompt ("No ingreso un texto valido, intente nuevamente, Personalizado, Dos personas, Tres personas o grupal (4 o + personas): ")
}

function cotizacion(clase) {
    let busqueda = tipoPrecio.find (elemento => elemento.tipo === clase);
    alert (`El entrenamiento ${clase} cuesta: ${busqueda.precio}  al mes, entrenando dos veces a la semana.`);
}
cotizacion (clase);

let consulta = prompt ("¿Le interesa otra cotización? (SI / NO)").toLowerCase();

function dudas (consulta) {
    if (consulta == "si") {
        clase = prompt ("¿Su entrenamiento sera? Personalizado, Dos personas, Tres personas o grupal (4 o + personas)").toLowerCase ();
        
        while (clase !== "personalizado" && clase !== "dos personas" && clase !== "tres personas" && clase !== "grupal") {
            clase = prompt ("No ingreso un texto valido, intente nuevamente, Personalizado, Dos personas, Tres personas o grupal (4 o + personas): ")
        }
        
        cotizacion (clase);
        consulta = prompt ("¿Le interesa otra cotización? (SI / NO)")
        dudas (consulta);
    } else {
        let reconsulta = prompt ("¿Alguna otra consulta? (SI / NO)").toLowerCase();

        if (reconsulta == "si") {
            let  = parseInt (prompt ("Ingrese su consulta"));
            alert ("Muchas gracias por visitarnos, Familia AT Sports");
        } else {
            alert ("Muchas gracias por visitarnos, Familia AT Sports");
        }
    } 
}
dudas (consulta); */



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






    
