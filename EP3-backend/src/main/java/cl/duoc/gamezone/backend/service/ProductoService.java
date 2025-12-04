package cl.duoc.gamezone.backend.service;

import cl.duoc.gamezone.backend.model.Producto;
import cl.duoc.gamezone.backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // GET TODOS
    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    // GET POR ID
    public Optional<Producto> obtenerPorId(Long id) {
        return productoRepository.findById(id);
    }

    // CREAR PRODUCTO
    public Producto crearProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    // ACTUALIZAR PRODUCTO
    public Optional<Producto> actualizarProducto(Long id, Producto datosNuevos) {
        return productoRepository.findById(id).map(p -> {
            p.setNombre(datosNuevos.getNombre());
            p.setCategoria(datosNuevos.getCategoria());
            p.setDescripcion(datosNuevos.getDescripcion());
            p.setPrecio(datosNuevos.getPrecio());
            p.setStock(datosNuevos.getStock());
            p.setImagenUrl(datosNuevos.getImagenUrl());
            return productoRepository.save(p);
        });
    }

    // ELIMINAR PRODUCTO
    public boolean eliminarProducto(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
