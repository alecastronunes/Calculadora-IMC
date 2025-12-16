import "./notfound.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <div className="container">
        <h1>404</h1>
        <p>Página não encontrada</p>

        <footer>
          <Link to={"/"}>
            <span>Voltar para página inicial</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
