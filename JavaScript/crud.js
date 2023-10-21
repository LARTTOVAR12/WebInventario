const url = "http://localhost:8080/api/v1/productos"; // Cambia la URL a tu endpoint correcto

async function getProducts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`La petición falló con el estado: ${response.status}`);
    }
    const data = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Hubo un error:", error);
    return null; // Retorna null en caso de error
  }
}

// Uso de la función
// ...

async function mostrarProductosEnTabla() {
  const data = await getProducts();
  if (data !== null) {
    const tabla = document.getElementById("tablaProductos");
    const tbody = tabla.querySelector("tbody");

    // Limpia el contenido previo de la tabla
    tbody.innerHTML = "";

    // Llena la tabla con los datos obtenidos
    data.forEach((producto) => {
      const fila = document.createElement("tr");
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
                <i class="fas fa-edit" ></i>
            </button>
            <button class="btnBorrar" data-id="${producto.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
                </td>
            `;
      tbody.appendChild(fila);
    });

    // Agregar eventos a los botones de modificar y borrar
    const btnModificarArray = document.getElementsByClassName("btnModificar");
    const btnBorrarArray = document.getElementsByClassName("btnBorrar");

    for (let i = 0; i < btnModificarArray.length; i++) {
      btnModificarArray[i].addEventListener("click", () => {
        // Lógica para modificar el producto con el ID almacenado en el atributo "data-id"
        const id = btnModificarArray[i].getAttribute("data-id");

        const miFormulario = document.getElementById("formulario");

        miFormulario.addEventListener("submit", async (event) => {
          event.preventDefault();

          const formData = new FormData(miFormulario);

          // Se crea un objeto con los datos del formulario
          const datos = {
            nombre: formData.get("nombre"),
            descripcion: formData.get("descripcion"),
            fechaV: formData.get("fechaV"),
            fechaC: formData.get("fechaC"),
            precio: parseFloat(formData.get("precio")),
            stock: parseInt(formData.get("stock")),
            categoria: formData.get("categoria"),
          };

          try {
            const response = await fetch(
              `http://localhost:8080/api/v1/enviar`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(datos), // Convertir el objeto a JSON
              }
                );

                if (response.ok) {
                console.log("Formulario enviado exitosamente");
                //   mostrarProductosEnTabla();
                } else {
                console.error("Error al enviar el formulario");
                }
                } catch (error) {
                    console.error("Error en la petición:", error);
                }
            });


            console.log(`Modificar producto con ID: ${id}`);
        });
    }

    for (let i = 0; i < btnBorrarArray.length; i++) {
      btnBorrarArray[i].addEventListener("click", async () => {
        // Lógica para borrar el producto con el ID almacenado en el atributo "data-id"
        const id = btnBorrarArray[i].getAttribute("data-id");
        //
        const confirmacion = confirm(
          `¿Estás seguro de que quieres borrar el producto con el ID ${id}`
        );

        if (confirmacion) {
          try {
            const response = await fetch(`http://localhost:8080/api/v1/${id}`, {
              method: "DELETE",
            });
            if (response.ok) {
              console.log(`Producto con ID ${id} borrado exitosamente`);
              // cambios en la tabla
            } else {
              console.error(`Error al borrar el producto con el ID ${id}`);
            }
          } catch (error) {
            console.error("Error en la petición", error);
          }
        }
        console.log(`Borrar producto con ID: ${id}`);
      });
    }
  }
}

// Llama a la función para mostrar los productos en la tabla
mostrarProductosEnTabla();
