import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import AdminMostrarProducto from "./pages/AdminMostrarProducto";
import AdminMostrarUsuario from "./pages/AdminMostrarUsuario";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 1. Home
describe("Página de inicio", () => {
  it("muestra el título principal", () => {
    render(<Home />);
    const titulo = screen.getByText(/Bienvenido a Game Zone/i);
    expect(titulo).toBeInTheDocument();
  });

  it("tiene un enlace para ver productos", () => {
    render(<Home />);
    const enlace = screen.getByRole("link", { name: /ver productos/i });
    expect(enlace).toBeInTheDocument();
  });
});

// 2. Navbar
describe("Navbar", () => {
  it("muestra el logo de la tienda", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const logo = screen.getByAltText(/logo de game zone/i);
    expect(logo).toBeInTheDocument();
  });

  it("tiene enlaces a secciones principales", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/productos/i)).toBeInTheDocument();
    expect(screen.getByText(/carrito/i)).toBeInTheDocument();
  });
});

// 3. Footer
describe("Footer", () => {
  it("muestra el texto de derechos", () => {
    render(<Footer />);
    const texto = screen.getByText(/todos los derechos reservados/i);
    expect(texto).toBeInTheDocument();
  });
});

// 4. Productos
describe("Página de productos", () => {
  it("muestra un listado de productos", () => {
    render(<Productos />);
    const texto = screen.getByText(/productos/i);
    expect(texto).toBeInTheDocument();
  });
});

// 5. Carrito
describe("Carrito", () => {
  it("muestra el título del carrito", () => {
    render(<Carrito />);
    const titulo = screen.getByText(/tu carrito/i);
    expect(titulo).toBeInTheDocument();
  });
});

// 6. Login
describe("Login", () => {
  it("muestra los campos de usuario y contraseña", () => {
    render(<Login />);
    expect(screen.getByLabelText(/usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });
});

// 7. Registro
describe("Registro", () => {
  it("muestra los campos de nombre y correo", () => {
    render(<Registro />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
  });
});

// 8. Admin - productos
describe("Admin - productos", () => {
  it("muestra el título de administración de productos", () => {
    render(<AdminMostrarProducto />);
    const titulo = screen.getByText(/administrar productos/i);
    expect(titulo).toBeInTheDocument();
  });
});

// 9. Admin - usuarios
describe("Admin - usuarios", () => {
  it("muestra el título de administración de usuarios", () => {
    render(<AdminMostrarUsuario />);
    const titulo = screen.getByText(/administrar usuarios/i);
    expect(titulo).toBeInTheDocument();
  });
});

// 10. Aplicación general
describe("Aplicación general", () => {
  it("renderiza el componente App sin errores", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const elementos = screen.getAllByText(/game zone/i);
    expect(elementos.length).toBeGreaterThan(0);
  });
});
