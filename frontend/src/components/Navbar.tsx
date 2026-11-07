import { NavLink } from "react-router-dom";
import { Music2 } from "lucide-react";

function Navbar() {
  return (
    <aside className="navbar">
      <nav className="navbar-nav">
        <div className="navbar-brand">
          <Music2 className="navbar-music-icon" />
          <h3 className="navbar-title">The Chord Book</h3>
        </div>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mysongs"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          My Songs
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Favorites
        </NavLink>
      </nav>
      <button className="logout-button">Logout</button>
    </aside>
  );
}

export default Navbar;
