import Swal from "sweetalert2";

export default function Blog() {
  const mostrarAlerta = (titulo) => {
    Swal.fire({
      title: titulo,
      text: "Pronto podrás leer el artículo completo en Game Zone 📰",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  };

  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Blog Game Zone</h2>
      <p className="lead text-center">
        Noticias, lanzamientos y novedades del mundo gamer 🎮
      </p>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/blog_ps5.jpg"
              className="card-img-top"
              alt="PlayStation 5"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">PlayStation 5: sigue arrasando</h5>
              <p className="card-text">
                La PS5 continúa dominando el mercado con exclusivos de alto nivel
                y una experiencia de nueva generación que encanta a los jugadores.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => mostrarAlerta("PlayStation 5: sigue arrasando")}
              >
                Leer más
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/blog_xbox.jpg"
              className="card-img-top"
              alt="Xbox Game Pass"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Xbox Game Pass: el futuro del gaming</h5>
              <p className="card-text">
                El servicio estrella de Microsoft sigue expandiendo su catálogo
                con títulos AAA y nuevas alianzas con estudios independientes.
              </p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  mostrarAlerta("Xbox Game Pass: el futuro del gaming")
                }
              >
                Leer más
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/blog_pc.jpg"
              className="card-img-top"
              alt="PC Gaming"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">El auge del PC Gaming</h5>
              <p className="card-text">
                Cada año más gamers prefieren la flexibilidad del PC,
                impulsando la venta de hardware y periféricos de alto rendimiento.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => mostrarAlerta("El auge del PC Gaming")}
              >
                Leer más
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
