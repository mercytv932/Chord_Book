import { Link } from "react-router-dom";

function Navbar() {
  return (
    <aside className="navbar">
      <nav className="navbar-nav">
        <h3 className="navbar logo">The Chord Book</h3>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/songs" className="navbar-link">
          My Songs
        </Link>
        <Link to="/favorites" className="navbar-link">
          Favorites
        </Link>
      </nav>
      <button className="logout-button">Logout</button>
    </aside>
  );
}

export default Navbar;
