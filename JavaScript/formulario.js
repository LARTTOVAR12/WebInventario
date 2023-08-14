
const miFormulario = document.getElementById('formulario');


miFormulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(miFormulario);

  // Se crea un objeto con los datos del formulario
  const datos = {
    nombre: formData.get('nombre'),
    descripcion: formData.get('descripcion'),
    fechaV: formData.get('fechaV'),
    fechaC: formData.get('fechaC'),
    precio: parseFloat(formData.get('precio')),
    stock: parseInt(formData.get('stock')),
    categoria: formData.get('categoria')
  };

  try {
    const response = await fetch('http://localhost:8080/api/v1/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos) // Convertir el objeto a JSON
    });

    if (response.ok) {
      console.log('Formulario enviado exitosamente');
      
    } else {
      console.error('Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error en la petición:', error);
  }
});
