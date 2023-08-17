package com.example.crud.producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
public class ProductoController {

    private final ProductoSrvice productoSrvice;


    @Autowired
    public ProductoController(ProductoSrvice productoSrvice){
        this.productoSrvice = productoSrvice;
    }

    //Para traer o mostrar los productos de una base de datos
    @GetMapping(path = "/productos")
    public List<Producto> getProductos() {
        return productoSrvice.getProductos();
    }

    //Para enviar o aregar un producto a la base de datos
    @PostMapping(path = "/enviar")
    public ResponseEntity<Object> registrarProducto(@RequestBody Producto producto) {
        return this.productoSrvice.newProduct(producto);
    }
    //Para actualizar o modificar los datos de un producto
    @PutMapping
    public ResponseEntity<Object> actualizarProducto(@RequestBody Producto producto) {
        return this.productoSrvice.newProduct(producto);
    }

    //Para borrar datos por medio del Id
    @DeleteMapping(path = "{productID}")
    public ResponseEntity<Object> eliminarProducto(@PathVariable("productID") Long id) {
        return  this.productoSrvice.deleteProducto(id);
    }

}
