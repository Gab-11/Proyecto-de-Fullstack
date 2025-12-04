import { useState, useEffect } from "react";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Cargar carrito desde localStorage
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Tu carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="row">
            {carrito.map((p) => (
              <div key={p.id} className="col-md-4 mb-4">
                <div className="card text-center shadow-sm">
                  <img
                    src={p.imagen}
                    className="card-img-top"
                    alt={p.nombre}
                    style={{ height: "180px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.nombre}</h5>
                    <p className="card-text">${p.precio.toLocaleString()}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarDelCarrito(p.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-end mt-3">
            Total: ${total.toLocaleString()}
          </h4>
        </>
      )}
    </main>
  );
}
