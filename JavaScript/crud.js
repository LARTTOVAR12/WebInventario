
const url = 'http://localhost:8080/api/v1/productos'; // Cambia la URL a tu endpoint correcto

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

// Uso de la función
// ...

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
                <td>${producto.descripcion}</td>
                <td>${producto.fechaV}</td>
                <td>${producto.fechaC}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>${producto.categoria}</td>
                <td>
                <button class="btnModificar" data-id="${producto.id}">
                <i class="fas fa-edit" color="green"></i>
            </button>
            <button class="btnBorrar" data-id="${producto.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
                </td>
            `;
            tbody.appendChild(fila);
        });

        // Agregar eventos a los botones de modificar y borrar
        const btnModificarArray = document.getElementsByClassName('btnModificar');
        const btnBorrarArray = document.getElementsByClassName('btnBorrar');

        for (let i = 0; i < btnModificarArray.length; i++) {
            btnModificarArray[i].addEventListener('click', () => {
                // Lógica para modificar el producto con el ID almacenado en el atributo "data-id"
                const id = btnModificarArray[i].getAttribute('data-id');
                console.log(`Modificar producto con ID: ${id}`);
            });
        }

        for (let i = 0; i < btnBorrarArray.length; i++) {
            btnBorrarArray[i].addEventListener('click', () => {
                // Lógica para borrar el producto con el ID almacenado en el atributo "data-id"
                const id = btnBorrarArray[i].getAttribute('data-id');
                console.log(`Borrar producto con ID: ${id}`);
            });
        }
    }
}

// Llama a la función para mostrar los productos en la tabla
mostrarProductosEnTabla();
