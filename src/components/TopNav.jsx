import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" aria-label="Wistaway home">
          Wistaway
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/browse" className="nav-link">
            Browse
          </NavLink>
          <NavLink to="/playlists" className="nav-link">
            Playlists
          </NavLink>
          <NavLink to="/travel-style" className="nav-link">
            Travel Style
          </NavLink>
          <NavLink to="/booking" className="nav-link">
            Trip Alignment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
