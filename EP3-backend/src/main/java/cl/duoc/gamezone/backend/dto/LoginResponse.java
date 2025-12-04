package cl.duoc.gamezone.backend.dto;

public class LoginResponse {

    private boolean exito;
    private String mensaje;
    private Long idUsuario;
    private String nombreCompleto;
    private String correo;
    private String rol;

    public LoginResponse() {
    }

    public LoginResponse(boolean exito, String mensaje, Long idUsuario,
                         String nombreCompleto, String correo, String rol) {
        this.exito = exito;
        this.mensaje = mensaje;
        this.idUsuario = idUsuario;
        this.nombreCompleto = nombreCompleto;
        this.correo = correo;
        this.rol = rol;
    }

    public boolean isExito() {
        return exito;
    }

    public void setExito(boolean exito) {
        this.exito = exito;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}
