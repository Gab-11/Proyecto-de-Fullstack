import React from "react";

export default function AdminMostrarUsuario() {
  return (
    <main className="container my-5">
      <h1 className="mb-4 text-center">Administrar usuarios</h1>
      <p className="text-center">
        Aquí podrás gestionar los usuarios registrados en la plataforma.
      </p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>U001</td>
            <td>Gabriel Neira</td>
            <td>gabriel@example.com</td>
            <td>Administrador</td>
          </tr>
          <tr>
            <td>U002</td>
            <td>Usuario Demo</td>
            <td>demo@gamezone.cl</td>
            <td>Cliente</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
