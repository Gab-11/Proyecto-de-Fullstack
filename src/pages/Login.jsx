export default function Login() {
  return (
    <main className="container my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Iniciar sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input id="usuario" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">Contraseña</label>
          <input id="contraseña" type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
      <p className="text-center mt-3">
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </main>
  );
}
