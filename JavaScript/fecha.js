function mostrarFechaActual() {
    const fechaActual = new Date();
    const opcionesFecha = {year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

    const h4Fecha = document.getElementById('fechaActual');
    h4Fecha.textContent = `Fecha: ${fechaFormateada}`;
}

// Llama a la función para mostrar la fecha actual en el h4 con id "fechaActual"
mostrarFechaActual();


//se crea una función para la hora actual 

function mostarHoraActual () {
    const horaActual = new Date () 
        const opcionesHora = { hour: 'numeric', minute: 'numeric'};
        const horaFormateada = horaActual.toLocaleTimeString('es-ES', opcionesHora);

        const muestreHora = document.getElementById('presentarHora');
        muestreHora.textContent = `${horaFormateada}`;
}
// Llamar a la función para mostrar la hora
mostarHoraActual();

function mostrarNombre() {
    // obtner el valor ingresado por el usuario
    const nombre = document.getElementById("").value;

    // Mostrar en pantalla el nombre de usuario 
    const resutadoTextArea = document.getElementById("");
    resutadoTextArea.value = nombre;
};

