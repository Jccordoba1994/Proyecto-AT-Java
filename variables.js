/* // Ingreso consultas
let Usuario = prompt ("Ingrese su nombre");

while (!Usuario) { 
    Usuario = prompt ("No ingreso un nombre valido, intente nuevamente")
}

let sexualidad =  prompt ("Ingrese su Sexo: M (Masculino), F (Femenino) o NB (No binario)").toLowerCase();

while (sexualidad !== "m" && sexualidad !== "f" && sexualidad !== "nb") {
    sexualidad = prompt ("No ingreso una letra válida, intente nuevamente: ")
}

if (sexualidad == "m") {
    alert ("Bienvenido " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else if (sexualidad == "f") {
    alert ("Bienvenida " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else {
    alert ("Bienvenide " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
}


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

function registro() {
    for (const Clientes of cliente) {
        console.log(Clientes);
    }
}
registro(Clientes);

function guardar() {
    let cliente = registro ();
    registro (cliente);
} 
guardar ();

const tipoPrecio = [
    {tipo: "personalizado", precio: 5000},
    {tipo: "dos personas", precio: 4500},
    {tipo: "tres personas", precio: 4000},
    {tipo: "grupal", precio: 3500},
];

let clase = prompt ("¿Su entrenamiento sera? Personalizado, Dos personas, Tres personas o grupal (4 o + personas)").toLowerCase ();

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

    let consulta = [];
    localStorage.setItem("consulta", JSON.stringify(consulta))

    function validarFormulario(e) {
        e.preventDefault();
        let nombre = document.getElementById("nombreyapellido").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
        let consultas = document.getElementById("comentarios").value;

        let datos = (new registroConsultas (nombre, telefono, email, consultas));
        consulta.push(datos);
    };

        validarFormulario (consulta);

    function registro() {
        for (const registroConsultas of consulta) {
            // console.log(registroConsultas);
            registro(registroConsultas);
        }
    }

    function guardar() {
        let consulta = registro ();
        registro (consulta);
    } 
    guardar ();

    let formulario1 = document.getElementById("formulario1");
    formulario1.addEventListener("submit", validarFormulario1);

    let consulta1 = [];
    localStorage.setItem("consulta", JSON.stringify(consulta1))

    function validarFormulario1(e) {
        e.preventDefault();
        let nombre = document.getElementById("nombreyapellido").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
        let consultas = document.getElementById("comentarios").value;

        let datos = (new registroConsultas (nombre, telefono, email, consultas));
        consulta.push(datos);
    };

        validarFormulario1 (consulta);

    function registroConsulta1() {
        for (const registroConsultas of consulta) {
            // console.log(registroConsultas);
            registroConsulta1(registroConsultas);
        }
    }

    function guardar() {
        let consulta = registro ();
        registro (consulta);
    } 
    guardar ();




    
