import { NavLink, Link, useNavigate } from "react-router-dom";

const logo = new URL("../assets/wistaway-logo.png", import.meta.url).href;

export default function TopNav() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isAuthed = Boolean(token);

  const hasCompletedOnboardingQuiz =
    localStorage.getItem("hasCompletedOnboardingQuiz") === "true";

  const quizLabel =
    isAuthed && hasCompletedOnboardingQuiz ? "Take a quiz" : "Take the quiz";

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

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
          <NavLink to="/quiz" className="nav-link">
            {quizLabel}
          </NavLink>
          <NavLink to="/booking" className="nav-link">
            Book
          </NavLink>

          {isAuthed ? (
            <>
              <NavLink to="/travel-style" className="nav-link">
                Travel Style
              </NavLink>
              <NavLink to="/playlists" className="nav-link">
                Playlists
              </NavLink>
              <button
                type="button"
                className="nav-link nav-link--button"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Log in
              </Link>
              <Link to="/register" className="nav-link">
                Create account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
