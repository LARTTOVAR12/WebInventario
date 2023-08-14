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

    @GetMapping(path = "/productos")
    public List<Producto> getProductos() {
        return productoSrvice.getProductos();
    }

    @PostMapping(path = "/enviar")
    public ResponseEntity<Object> registrarProducto(@RequestBody Producto producto) {
        return this.productoSrvice.newProduct(producto);
    }

    @PutMapping
    public ResponseEntity<Object> actualizarProducto(@RequestBody Producto producto) {
        return this.productoSrvice.newProduct(producto);
    }

    @DeleteMapping(path = "{productID}")
    public ResponseEntity<Object> eliminarProducto(@PathVariable("productID") Long id) {
        return  this.productoSrvice.deleteProducto(id);
    }

}
