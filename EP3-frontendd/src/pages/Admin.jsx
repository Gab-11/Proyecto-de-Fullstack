//cd C:\Users\gabri\Fullstack2\gamezone-react
//npm run dev
//npm run test -- --reporter=verbose

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Admin() {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Estados para formulario de producto
  const [nombreProd, setNombreProd] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  // ID que se está editando (null = modo agregar)
  const [idEditando, setIdEditando] = useState(null);

  // =======================
  //   PRODUCTOS (BACKEND)
  // =======================

  // Cargar productos desde backend
  const cargarProductos = async () => {
    try {
      const resp = await fetch("http://localhost:8080/api/productos");
      const data = await resp.json();
      setProductos(data);
    } catch (err) {
      console.error("Error cargando productos:", err);
    }
  };

  // Cargar usuarios
  const cargarUsuarios = async () => {
    try {
      const resp = await fetch("http://localhost:8080/api/usuarios");
      const data = await resp.json();
      setUsuarios(data);
    } catch (err) {
      console.error("Error cargando usuarios:", err);
    }
  };

  // Ejecutar al inicio
  useEffect(() => {
    cargarProductos();
    cargarUsuarios();
  }, []);

  // Limpiar formulario
  const limpiarFormulario = () => {
    setNombreProd("");
    setCategoria("");
    setPrecio("");
    setStock("");
    setIdEditando(null);
  };

  // Guardar producto (AGREGAR o EDITAR)
  const guardarProducto = async (e) => {
    e.preventDefault();

    if (!nombreProd || !categoria || !precio || !stock) {
      Swal.fire("Error", "Completa todos los campos del producto", "error");
      return;
    }

    const productoPayload = {
      nombre: nombreProd,
      categoria: categoria,
      precio: parseInt(precio),
      stock: parseInt(stock),
      descripcion: "",
      imagenUrl: "/img/default.jpg",
    };

    const urlBase = "http://localhost:8080/api/productos";

    try {
      let resp;

      if (idEditando === null) {
        // MODO AGREGAR (POST)
        resp = await fetch(urlBase, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoPayload),
        });
      } else {
        // MODO EDITAR (PUT)
        resp = await fetch(`${urlBase}/${idEditando}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoPayload),
        });
      }

      if (resp.ok) {
        Swal.fire(
          "Éxito",
          idEditando === null
            ? "Producto agregado correctamente"
            : "Producto actualizado correctamente",
          "success"
        );
        cargarProductos();
        limpiarFormulario();
      } else {
        Swal.fire("Error", "No se pudo guardar el producto", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Problema al conectar con el servidor", "error");
    }
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) return;

    try {
      const resp = await fetch(`http://localhost:8080/api/productos/${id}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        Swal.fire("Eliminado", "Producto eliminado", "info");
        cargarProductos();

        // Si estabas editando este mismo producto, limpia el formulario
        if (idEditando === id) {
          limpiarFormulario();
        }
      } else {
        Swal.fire("Error", "No se pudo eliminar", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Problema al conectar con el servidor", "error");
    }
  };

  // Pasar un producto al formulario para editar
  const editarProducto = (producto) => {
    setIdEditando(producto.idProducto);
    setNombreProd(producto.nombre || "");
    setCategoria(producto.categoria || "");
    setPrecio(producto.precio || "");
    setStock(producto.stock || "");
  };

  // =======================
  //     USUARIOS (LISTA)
  // =======================

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold text-center">Panel de Administración</h1>

      <div className="row">
        {/* ======================
            LISTA DE PRODUCTOS
        ======================= */}
        <div className="col-md-8">
          <h3 className="mb-3">Productos registrados</h3>

          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th style={{ width: "160px" }}>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productos.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No hay productos registrados.
                  </td>
                </tr>
              ) : (
                productos.map((p) => (
                  <tr key={p.idProducto}>
                    <td>{p.idProducto}</td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>${p.precio}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => editarProducto(p)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => eliminarProducto(p.idProducto)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ======================
            FORMULARIO PRODUCTO
        ======================= */}
        <div className="col-md-4">
          <h3 className="mb-3">
            {idEditando === null
              ? "Agregar producto"
              : `Editar producto #${idEditando}`}
          </h3>

          <form onSubmit={guardarProducto} className="border p-3 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Nombre del producto</label>
              <input
                className="form-control"
                value={nombreProd}
                onChange={(e) => setNombreProd(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <input
                className="form-control"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                type="number"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary w-100">
                {idEditando === null ? "Agregar" : "Guardar cambios"}
              </button>

              {idEditando !== null && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={limpiarFormulario}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ======================
          LISTA DE USUARIOS
      ======================= */}
      <div className="mt-5">
        <h3 className="mb-3">Usuarios registrados</h3>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre completo</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay usuarios registrados.
                </td>
              </tr>
            ) : (
              usuarios.map((u) => (
                <tr key={u.idUsuario}>
                  <td>{u.idUsuario}</td>
                  <td>{u.nombreCompleto}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol?.nombre}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
