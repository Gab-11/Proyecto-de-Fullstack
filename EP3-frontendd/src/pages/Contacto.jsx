import Swal from "sweetalert2";
import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        title: "Error",
        text: "Por favor completa todos los campos.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Mensaje enviado ✅",
      text: "Gracias por contactarte con Game Zone. Te responderemos pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <main className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Contáctanos</h2>
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar mensaje
        </button>
      </form>
    </main>
  );
}
