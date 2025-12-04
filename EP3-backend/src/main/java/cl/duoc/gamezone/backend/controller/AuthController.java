package cl.duoc.gamezone.backend.controller;

import cl.duoc.gamezone.backend.dto.LoginRequest;
import cl.duoc.gamezone.backend.dto.LoginResponse;
import cl.duoc.gamezone.backend.model.Usuario;
import cl.duoc.gamezone.backend.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UsuarioService usuarioService;

    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        Optional<Usuario> usuarioOpt = usuarioService.buscarPorCorreo(request.getCorreo());

        if (usuarioOpt.isEmpty()) {
            // Correo no existe
            return ResponseEntity.status(401).body(
                    new LoginResponse(false, "Correo o contraseña incorrectos",
                            null, null, null, null)
            );
        }

        Usuario usuario = usuarioOpt.get();

        // Comparación simple de contraseña (texto plano)
        if (!usuario.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(401).body(
                    new LoginResponse(false, "Correo o contraseña incorrectos",
                            null, null, null, null)
            );
        }

        if (usuario.getActivo() != null && !usuario.getActivo()) {
            return ResponseEntity.status(403).body(
                    new LoginResponse(false, "Usuario inactivo",
                            null, null, null, null)
            );
        }

        // Login OK
        LoginResponse response = new LoginResponse(
                true,
                "Login exitoso",
                usuario.getIdUsuario(),
                usuario.getNombreCompleto(),
                usuario.getCorreo(),
                usuario.getRol().getNombre()
        );

        return ResponseEntity.ok(response);
    }
}
