import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos desde el backend
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch("http://localhost:8080/api/productos");

        if (!respuesta.ok) {
          throw new Error("Error al obtener los productos");
        }

        const data = await respuesta.json();
        setProductos(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos. Intenta más tarde.");
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  // Agregar producto al carrito (se guarda en localStorage)
  const agregarAlCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    const nuevoItem = {
      id: producto.idProducto, // viene desde el backend
      nombre: producto.nombre,
      precio: Number(producto.precio),
      imagen: producto.imagenUrl || "/img/CO001_ps5.jpg", // imagen por defecto si viene null
    };

    carritoActual.push(nuevoItem);
    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${producto.nombre} se añadió al carrito`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Productos disponibles</h2>

      {cargando && <p className="text-center">Cargando productos...</p>}

      {error && (
        <p className="text-center text-danger">
          {error}
        </p>
      )}

      {!cargando && !error && productos.length === 0 && (
        <p className="text-center">No hay productos disponibles.</p>
      )}

      <div className="row">
        {productos.map((p) => (
          <div key={p.idProducto} className="col-md-3 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={p.imagenUrl || "/img/CO001_ps5.jpg"}
                alt={p.nombre}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">
                  ${Number(p.precio).toLocaleString("es-CL")}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(p)}
                >
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
