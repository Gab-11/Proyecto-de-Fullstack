//cd C:\Users\gabri\Fullstack2\gamezone-react
//npm run dev
//npm run test -- --reporter=verbose

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    try {
      const data = localStorage.getItem("usuarioActual");
      if (data) {
        setUsuario(JSON.parse(data));
      }
    } catch (e) {
      console.error("Error leyendo usuarioActual:", e);
    }
  }, []);

  const linkClass = (path) =>
    `nav-link ${
      location.pathname === path ? "text-warning fw-bold" : "text-light"
    }`;

  const manejarLogout = () => {
    localStorage.removeItem("usuarioActual");
    setUsuario(null);
    navigate("/login");
  };

  const esAdmin = usuario && usuario.rol === "ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/img/logo.png"
            alt="Logo de Game Zone"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">Game Zone</span>
        </Link>

        {/* Botón móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <Link to="/" className={linkClass("/")}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className={linkClass("/productos")}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className={linkClass("/carrito")}>
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className={linkClass("/nosotros")}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className={linkClass("/contacto")}>
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={linkClass("/blog")}>
                Blog
              </Link>
            </li>

            {/* Si es ADMIN, mostramos link Admin */}
            {esAdmin && (
              <li className="nav-item">
                <Link to="/admin" className={linkClass("/admin")}>
                  Admin
                </Link>
              </li>
            )}

            {/* Si NO hay usuario: mostrar Login y Registro */}
            {!usuario && (
              <>
                <li className="nav-item">
                  <Link to="/login" className={linkClass("/login")}>
                    Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/registro" className={linkClass("/registro")}>
                    Registro
                  </Link>
                </li>
              </>
            )}

            {/* Si hay usuario logueado: mostrar nombre y Cerrar sesión */}
            {usuario && (
              <>
                <li className="nav-item text-light">
                  <span className="nav-link disabled">
                    Hola, {usuario.nombreCompleto}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={manejarLogout}
                    className="btn btn-outline-light btn-sm"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
