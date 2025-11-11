//npm run dev
//npm run test -- --reporter=verbose


import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `nav-link ${location.pathname === path ? "text-warning fw-bold" : "text-light"}`;

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
            <li className="nav-item">
              <Link to="/admin" className={linkClass("/admin")}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
