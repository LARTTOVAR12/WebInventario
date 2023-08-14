package com.example.crud.producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepositorio extends JpaRepository<Producto, Long> {
    //@Query("SELECT * FROM Producto p WHERE p.nombre= ?1")

    Optional<Producto> findProductoByNombre(String nombre);
}
