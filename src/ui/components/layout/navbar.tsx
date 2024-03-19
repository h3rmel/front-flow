import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full p-4 border-b bg-card text-card-foreground">
      <section className="container">
        <Link to="/">Atelier</Link>
      </section>
    </nav>
  );
}
