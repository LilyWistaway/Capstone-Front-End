import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function QuizResults() {
  useEffect(() => {
    localStorage.setItem("hasCompletedOnboardingQuiz", "true");
  }, []);

  return (
    <main className="container">
      <section className="card stack card-center">
        <h1 className="h1">Your travel style</h1>

        <p className="body card-center__body">
          Here’s your current style snapshot. It evolves as you explore and
          save.
        </p>

        <div className="card card-compact stack-tight">
          <h2 className="h2 center">Style snapshot</h2>
          <ul className="caption text-left no-margin">
            <li>Prefer: calm, design-forward stays</li>
            <li>Energy: unhurried, sensory, intentional</li>
            <li>Best with: one anchor place and a few optional adventures</li>
          </ul>
        </div>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/browse">
            Browse Destinations
          </Link>
          <Link className="btn btn-secondary" to="/playlists">
            View Playlists
          </Link>
        </div>

        <Link className="link" to="/travel-style">
          Go deeper: Travel Style
        </Link>
      </section>
    </main>
  );
}
