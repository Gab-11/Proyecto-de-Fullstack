export default function Home() {
  return (
    <main className="container my-4">
      <section className="hero rounded p-5 text-center mb-5 bg-dark text-white">
        <h1>Bienvenido a Game Zone</h1>
        <p className="lead">Consolas, accesorios, PC Gamer y más.</p>
        <a href="/productos" className="btn btn-primary me-2">
          Ver productos
        </a>
      </section>
    </main>
  );
}
