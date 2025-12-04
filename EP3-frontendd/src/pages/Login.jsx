import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      const respuesta = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, password }),
      });

      const data = await respuesta.json();

      if (!respuesta.ok || !data.exito) {
        setError(data.mensaje || "Correo o contraseña incorrectos");
        return;
      }

      // Guardamos al usuario en localStorage
      const usuario = {
        idUsuario: data.idUsuario,
        nombreCompleto: data.nombreCompleto,
        correo: data.correo,
        rol: data.rol,
      };

      localStorage.setItem("usuarioActual", JSON.stringify(usuario));

      // Redirigimos según el rol
      if (data.rol === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor. Intenta más tarde.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="container my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Iniciar sesión</h2>

      <form onSubmit={manejarSubmit}>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            className="form-control"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="alert alert-danger py-2" role="alert">
            {error}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100" disabled={cargando}>
          {cargando ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>

      <p className="text-center mt-3">
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </main>
  );
}
