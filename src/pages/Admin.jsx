import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Admin() {
  const [seccion, setSeccion] = useState("productos");

  // Estados de productos
  const [productos, setProductos] = useState([]);
  const [nombreProd, setNombreProd] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  // Estados de usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [run, setRun] = useState("");
  const [nombreUsu, setNombreUsu] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipo, setTipo] = useState("");

  // Cargar datos desde localStorage
  useEffect(() => {
    const guardadosProd = JSON.parse(localStorage.getItem("productos")) || [];
    const guardadosUser = JSON.parse(localStorage.getItem("usuarios")) || [
      { run: "11111111-1", nombre: "Admin General", correo: "admin@duoc.cl", tipo: "Administrador" },
      { run: "22222222-2", nombre: "Gabriel Neira", correo: "gabriel@duocuc.cl", tipo: "Cliente" },
    ];
    setProductos(guardadosProd);
    setUsuarios(guardadosUser);
  }, []);

  // Guardar en localStorage
  const guardarProductos = (lista) => {
    setProductos(lista);
    localStorage.setItem("productos", JSON.stringify(lista));
  };

  const guardarUsuarios = (lista) => {
    setUsuarios(lista);
    localStorage.setItem("usuarios", JSON.stringify(lista));
  };

  //  Funciones de productos
  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nombreProd || !categoria || !precio || !stock) {
      Swal.fire("Error", "Por favor completa todos los campos del producto", "error");
      return;
    }

    const nuevo = {
      id: Date.now(),
      nombre: nombreProd,
      categoria,
      precio: parseInt(precio),
      stock: parseInt(stock),
    };
    const lista = [...productos, nuevo];
    guardarProductos(lista);
    Swal.fire("Agregado", "Producto guardado correctamente ✅", "success");
    setNombreProd("");
    setCategoria("");
    setPrecio("");
    setStock("");
  };

  const eliminarProducto = (id) => {
    const lista = productos.filter((p) => p.id !== id);
    guardarProductos(lista);
    Swal.fire("Eliminado", "Producto eliminado 🗑️", "info");
  };

  
  const agregarUsuario = (e) => {
    e.preventDefault();
    if (!run || !nombreUsu || !correo || !tipo) {
      Swal.fire("Error", "Completa todos los campos del usuario", "error");
      return;
    }

    if (usuarios.some((u) => u.run === run)) {
      Swal.fire("Error", "El RUN ya existe", "error");
      return;
    }

    const nuevo = { run, nombre: nombreUsu, correo, tipo };
    const lista = [...usuarios, nuevo];
    guardarUsuarios(lista);
    Swal.fire("Agregado", "Usuario agregado correctamente ✅", "success");
    setRun("");
    setNombreUsu("");
    setCorreo("");
    setTipo("");
  };

  const eliminarUsuario = (run) => {
    const lista = usuarios.filter((u) => u.run !== run);
    guardarUsuarios(lista);
    Swal.fire("Eliminado", "Usuario eliminado 🗑️", "info");
  };

  
  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Panel de Administración</h2>

      {}
      <div className="text-center mb-4">
        <button
          className={`btn me-2 ${seccion === "productos" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setSeccion("productos")}
        >
          Productos
        </button>
        <button
          className={`btn ${seccion === "usuarios" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setSeccion("usuarios")}
        >
          Usuarios
        </button>
      </div>

      {}
      {seccion === "productos" && (
        <>
          <form onSubmit={agregarProducto} className="bg-light p-4 rounded mb-5 shadow-sm">
            <h5 className="mb-3">Agregar Producto</h5>
            <div className="row">
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={nombreProd}
                  onChange={(e) => setNombreProd(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Categoría"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-success w-100">Guardar Producto</button>
          </form>

          <h4 className="text-center mb-3">Listado de Productos</h4>
          {productos.length === 0 ? (
            <p className="text-center">No hay productos registrados.</p>
          ) : (
            <div className="row">
              {productos.map((p) => (
                <div key={p.id} className="col-md-4 mb-4">
                  <div className="card h-100 text-center shadow-sm">
                    <div className="card-body">
                      <h5>{p.nombre}</h5>
                      <p className="text-muted">{p.categoria}</p>
                      <p>${p.precio.toLocaleString()}</p>
                      <p>Stock: {p.stock}</p>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(p.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {}
      {seccion === "usuarios" && (
        <>
          <form onSubmit={agregarUsuario} className="bg-light p-4 rounded mb-5 shadow-sm">
            <h5 className="mb-3">Agregar Usuario</h5>
            <div className="row">
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="RUN"
                  value={run}
                  onChange={(e) => setRun(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={nombreUsu}
                  onChange={(e) => setNombreUsu(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-3">
                <select
                  className="form-select"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="">Tipo de usuario</option>
                  <option value="Cliente">Cliente</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
            </div>
            <button className="btn btn-success w-100">Guardar Usuario</button>
          </form>

          <h4 className="text-center mb-3">Listado de Usuarios</h4>
          {usuarios.length === 0 ? (
            <p className="text-center">No hay usuarios registrados.</p>
          ) : (
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>RUN</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Tipo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.run}>
                    <td>{u.run}</td>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{u.tipo}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarUsuario(u.run)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </main>
  );
}
