import { NavLink } from "react-router-dom";

const logo = new URL("../assets/wistaway-logo.png", import.meta.url).href;

export default function TopNav() {
  return (
    <header className="nav nav--brand-layout">
      <div className="nav-rails">
        <div className="nav-brand">
          <img src={logo} alt="Wistaway" className="nav-logo-img" />
        </div>

        <nav
          className="nav-links nav-links--right"
          aria-label="Primary navigation"
        >
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
            Book
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
