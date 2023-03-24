import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>One Piece Películas</h1>
      <ul>
        <li>
          <Link to="/">Página principal</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;