package cl.duoc.gamezone.backend.service;

import cl.duoc.gamezone.backend.model.Rol;
import cl.duoc.gamezone.backend.model.Usuario;
import cl.duoc.gamezone.backend.repository.RolRepository;
import cl.duoc.gamezone.backend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;

    public UsuarioService(UsuarioRepository usuarioRepository, RolRepository rolRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
    }

    // LISTAR TODOS
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // BUSCAR POR ID
    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // REGISTRAR USUARIO COMO CLIENTE (rol CLIENTE por defecto)
    public Usuario registrarCliente(Usuario usuario) {
        Rol rolCliente = rolRepository.findByNombre("CLIENTE")
                .orElseThrow(() -> new RuntimeException("No existe el rol CLIENTE en la base de datos"));

        usuario.setRol(rolCliente);
        usuario.setActivo(true);

        return usuarioRepository.save(usuario);
    }

    // CREAR USUARIO CON ROL ESPECÍFICO (para admin)
    public Usuario crearUsuarioConRol(Usuario usuario, String nombreRol) {
        Rol rol = rolRepository.findByNombre(nombreRol)
                .orElseThrow(() -> new RuntimeException("No existe el rol " + nombreRol));

        usuario.setRol(rol);
        return usuarioRepository.save(usuario);
    }

    // ACTUALIZAR USUARIO (sin tocar el rol aquí)
    public Optional<Usuario> actualizarUsuario(Long id, Usuario datosNuevos) {
        return usuarioRepository.findById(id).map(u -> {
            u.setNombreCompleto(datosNuevos.getNombreCompleto());
            u.setCorreo(datosNuevos.getCorreo());
            u.setPassword(datosNuevos.getPassword());
            u.setRun(datosNuevos.getRun());
            u.setActivo(datosNuevos.getActivo());
            return usuarioRepository.save(u);
        });
    }

    // ELIMINAR
    public boolean eliminarUsuario(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // BUSCAR POR CORREO (para login)
    public Optional<Usuario> buscarPorCorreo(String correo) {
        return usuarioRepository.findByCorreo(correo);
    }

}
