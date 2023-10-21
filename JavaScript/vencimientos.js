 //función para traer el metodo get del backend
const url = 'http://localhost:8080/api/v1/productos';




async function getProducts() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`La petición falló con el estado: ${response.status}`);
        }
        const data = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
        console.error('Hubo un error:', error);
        return null; // Retorna null en caso de error
    }
}




async function mostrarProductosEnTabla() {
    const data = await getProducts();
    if (data !== null) {
        const tabla = document.getElementById('tablaProductos');
        const tbody = tabla.querySelector('tbody');
        
        // Limpia el contenido previo de la tabla
        tbody.innerHTML = '';

        // Llena la tabla con los datos obtenidos
        data.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.fechaV}</td>
                <td>${producto.fechaC}</td>
                <td>${producto.stock}</td>
                <td></td>
                <button class="btnModificar" data-id="${producto.id}">
                <i class="fas fa-edit" ></i>
                </button>`;
            tbody.appendChild(fila);
        });


        const btnModificarArray = document.getElementsByClassName('btnModificar');
const btnGuardarEdicion = document.getElementById('btnGuardarEdicion');

for (let i = 0; i < btnModificarArray.length; i++) {
    btnModificarArray[i].addEventListener('click', async () => {
        try {
            // Obtener el ID del producto a modificar desde el atributo "data-id"
            const id = btnModificarArray[i].getAttribute('data-id');
        
            // Obtener los datos del producto desde el servidor utilizando su ID
            const response = await fetch(`http://localhost:8080/api/v1/productos/${id}`);
            
            if (!response.ok) {
                throw new Error(`La petición falló con el estado: ${response.status}`);
            }
            
            const producto = await response.json();
            
            // Mostrar el formulario de edición
            formularioEdicion.style.display = 'block';
            
            // Obtener los elementos del formulario
            const fechaV = document.getElementById('fechaEditar');
            // ... Agrega los demás campos aquí
            
            // Pre-cargar los valores actuales del producto en los campos del formulario
            fechaV.value = producto.fechaV; // Ajusta para cada campo necesario
            
            // Agregar lógica para guardar los cambios en el formulario
            btnGuardarEdicion.addEventListener('click', async () => {
                // Obtener los nuevos valores de los campos del formulario
                const nuevaFechaV = fechaV.value;
                // ... Ajusta para cada campo necesario
                
                // Crear un objeto con los nuevos datos del producto
                const nuevosDatos = {
                    fechaV: nuevaFechaV,
                    // ... Agrega los demás campos aquí
                };
        
                try {
                    // Enviar la solicitud de actualización al servidor
                    const response = await fetch(`http://localhost:8080/api/v1/productos/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(nuevosDatos)
                    });
                    if (response.ok) {
                        console.log(`Producto con ID ${id} actualizado exitosamente`);
                        // Actualizar la tabla con los nuevos datos
                        mostrarProductosEnTabla();
                        // Ocultar el formulario de edición después de guardar
                        formularioEdicion.style.display = 'none';
                    } else {
                        console.error(`Error al actualizar el producto con el ID ${id}`);
                    }
                } catch (error) {
                    console.error('Error en la petición', error);
                }
            });
        } catch (error) {
            console.error('Error en la petición', error);
        }
    });
}

        
        
    }
}

// Llama a la función para mostrar los productos en la tabla
mostrarProductosEnTabla();




