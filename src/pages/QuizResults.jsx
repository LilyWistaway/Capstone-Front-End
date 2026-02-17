import { Link } from "react-router-dom";

export default function QuizResults() {
  return (
    <main className="container">
      <section className="card stack">
        <h1 className="h1">Your travel style</h1>
        <p className="body">
          Here’s your current style snapshot. It evolves as you explore and
          save.
        </p>

        <div className="card card-compact stack-tight">
          <h2 className="h2">Style snapshot</h2>
          <ul className="caption">
            <li>Prefer: calm, design-forward stays</li>
            <li>Energy: unhurried, sensory, intentional</li>
            <li>Best with: one anchor place and a few optional adventures</li>
          </ul>
        </div>

        <div className="inline-row">
          <Link className="btn btn-primary" to="/browse">
            Browse Destinations
          </Link>
          <Link className="btn btn-secondary" to="/playlists">
            View Playlists
          </Link>
        </div>

        <Link className="link" to="/travel-style">
          Go deeper: Your Travel Style
        </Link>
      </section>
    </main>
  );
}
