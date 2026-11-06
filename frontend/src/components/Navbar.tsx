import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <aside className="navbar">
      <nav className="navbar-nav">
        <h3 className="navbar-logo">The Chord Book</h3>
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
