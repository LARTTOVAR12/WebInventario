const mostrarFormulario = document.getElementById('mostrarFormulario');
const ventanaEmergente= document.getElementById('ventanaEmergente');
const cerrarFormulario = document.getElementById('cerrarFormulario');

//
mostrarFormulario.addEventListener('click', () => {
    ventanaEmergente.style.display = 'flex';
});

cerrarFormulario.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
});

// Si quieres evitar que se cierre al hacer clic fuera del formulario, descomenta este bloque:
// ventanaEmergente.addEventListener('click', (event) => {
//   if (event.target === ventanaEmergente) {
//     ventanaEmergente.style.display = 'none';
//   }
// });