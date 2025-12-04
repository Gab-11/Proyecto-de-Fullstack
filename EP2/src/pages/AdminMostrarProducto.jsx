import React from "react";

export default function AdminMostrarProducto() {
  return (
    <main className="container my-5">
      <h1 className="mb-4 text-center">Administrar productos</h1>
      <p className="text-center">
        Aquí podrás ver, editar o eliminar los productos de la tienda.
      </p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>PlayStation 5</td>
            <td>$650.000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Editar</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Xbox Series X</td>
            <td>$620.000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Editar</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
