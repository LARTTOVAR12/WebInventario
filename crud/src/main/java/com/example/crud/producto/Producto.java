package com.example.crud.producto;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(unique = true)
    private  String nombre;

    private  String descripcion;
    private LocalDate fechaV;
    private LocalDate fechaC;

    private float precio;
    private int stock;
    private String categoria;
    private int totalStock;


    public Producto() {
    }

    public Producto(Long id, String nombre, String descripcion, LocalDate fechaV, LocalDate fechaC, float precio, int stock, String categoria, int totalStock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaV = fechaV;
        this.fechaC = fechaC;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.totalStock = totalStock;
    }

    public Producto(String nombre, String descripcion, LocalDate fechaV, LocalDate fechaC, float precio, int stock, String categoria, int totalStock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaV = fechaV;
        this.fechaC = fechaC;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.totalStock = totalStock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getFechaV() {
        return fechaV;
    }

    public void setFechaV(LocalDate fechaV) {
        this.fechaV = fechaV;
    }

    public LocalDate getFechaC() {
        return fechaC;
    }

    public void setFechaC(LocalDate fechaC) {
        this.fechaC = fechaC;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(int totalStock) {
        this.totalStock = totalStock;
    }
}
