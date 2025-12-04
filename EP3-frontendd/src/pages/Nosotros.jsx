export default function Nosotros() {
  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Sobre nosotros</h2>
      <p className="lead text-center">
        En <strong>Game Zone</strong> somos apasionados por el mundo gamer. 
        Nuestra misión es ofrecerte los mejores productos en consolas, 
        accesorios, periféricos y PC Gamer.
      </p>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <img
            src="/img/tienda.jpg"
            alt="Tienda Game Zone"
            className="img-fluid rounded shadow-sm mb-3"
          />
          <h5>Tienda física</h5>
          <p>Visítanos y vive la experiencia gamer en nuestro local.</p>
        </div>
        <div className="col-md-4">
          <img
            src="/img/blog_pc.jpg"
            alt="Productos"
            className="img-fluid rounded shadow-sm mb-3"
          />
          <h5>Productos de calidad</h5>
          <p>Solo trabajamos con marcas reconocidas y garantía oficial.</p>
        </div>
        <div className="col-md-4">
          <img
            src="/img/blog_xbox.jpg"
            alt="Clientes felices"
            className="img-fluid rounded shadow-sm mb-3"
          />
          <h5>Clientes felices</h5>
          <p>Más de 5.000 gamers confían en nosotros cada mes.</p>
        </div>
      </div>
    </main>
  );
}
