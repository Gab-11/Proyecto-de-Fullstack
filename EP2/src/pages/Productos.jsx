import { useState } from "react";
import Swal from "sweetalert2";

export default function Productos() {
  const [productos] = useState([
    { id: 1, nombre: "PlayStation 5", precio: 699990, imagen: "/img/CO001_ps5.jpg" },
    { id: 2, nombre: "Asus ROG Strix", precio: 1299990, imagen: "/img/CG001_asus_rog_strix.jpg" },
    { id: 3, nombre: "Control Xbox PowerA", precio: 59990, imagen: "/img/AC001_control_xbox.jpg" },
    { id: 4, nombre: "Audífonos HyperX Cloud 2", precio: 79990, imagen: "/img/AC002_hyperx_cloud2.jpg" },
    { id: 5, nombre: "Mouse Logitech G502", precio: 69990, imagen: "/img/MS001_logitech_g502.jpg" },
    { id: 6, nombre: "Alfombrilla Razer Goliathus", precio: 19990, imagen: "/img/MP001_razer_goliathus.jpg" },
    { id: 7, nombre: "Silla Secretlab Titan", precio: 329990, imagen: "/img/SG001_secretlab_titan.jpg" },
    { id: 8, nombre: "Polera Level Up", precio: 14990, imagen: "/img/PP001_polera_levelup.jpg" },
    { id: 9, nombre: "Catan", precio: 49990, imagen: "/img/JM001_catan.jpg" },
    { id: 10, nombre: "Carcassonne", precio: 44990, imagen: "/img/JM002_carcassonne.jpg" },
  ]);

  const agregarAlCarrito = (nombre) => {
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${nombre} se añadió al carrito`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Productos disponibles</h2>

      <div className="row">
        {productos.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">${p.precio.toLocaleString()}</p>
                <button className="btn btn-primary" onClick={() => agregarAlCarrito(p.nombre)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
