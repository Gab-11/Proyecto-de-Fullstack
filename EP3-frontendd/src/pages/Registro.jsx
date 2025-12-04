export default function Registro() {
  return (
    <main className="container my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Crear cuenta</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo</label>
          <input id="nombre" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input id="correo" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input id="password" type="password" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmar" className="form-label">Confirmar contraseña</label>
          <input id="confirmar" type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Registrarme
        </button>
      </form>
      <p className="text-center mt-3">
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </main>
  );
}
