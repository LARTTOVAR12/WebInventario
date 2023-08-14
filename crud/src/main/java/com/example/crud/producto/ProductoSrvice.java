package com.example.crud.producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoSrvice {

    HashMap<String, Object> datos;

    private  final ProductRepositorio productRepositorio;

    @Autowired
    public  ProductoSrvice(ProductRepositorio productRepositorio) {
        this.productRepositorio = productRepositorio;
    }

    public List<Producto> getProductos() {
        return this.productRepositorio.findAll();
    }

    public ResponseEntity<Object> newProduct(Producto producto) {
        Optional<Producto> res = productRepositorio.findProductoByNombre(producto.getNombre());
        datos = new HashMap<>();


        if (res.isPresent() && producto.getId()==null) {
            datos.put("datos", true);
            datos.put("message", "Ya existe un producto con ese mismo nombre");
            return new ResponseEntity<>(
                    datos,
                    HttpStatus.CONFLICT
            );
        }
        if(producto.getId() !=null){
            datos.put("message","Se actualizo con éxito");
        }
        productRepositorio.save(producto);
        datos.put("datos", producto);
        datos.put("message", "Se guardo con éxito");
        return new ResponseEntity<>(
                datos,
                HttpStatus.CREATED
        );
    }

    public ResponseEntity deleteProducto(Long id) {
        datos  = new HashMap<>();
       boolean  existe = this.productRepositorio.existsById(id);
       if(!existe){
           datos.put("error", true);
           datos.put("message", "No existe un producto con ese Id");
           return new ResponseEntity<>(
                  datos,
                  HttpStatus.CONFLICT
           );
       }
       productRepositorio.deleteById(id);
       datos.put("message", "producto eliminado");
       return new ResponseEntity<>(
               datos,
               HttpStatus.NO_CONTENT
       );
    }
}
