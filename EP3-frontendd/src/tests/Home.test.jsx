import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Página de inicio", () => {
  it("muestra el título principal", () => {
    render(<Home />);
    const titulo = screen.getByText(/Bienvenido a Game Zone/i);
    expect(titulo).toBeInTheDocument();
  });

  it("tiene un enlace para ver productos", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /ver productos/i });
    expect(link).toBeInTheDocument();
  });
});
