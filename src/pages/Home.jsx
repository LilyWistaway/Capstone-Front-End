import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      <section className="card stack card-center">
        <h1 className="h1">Travel that feels like you.</h1>

        <p className="body card-center__body">
          Start with mood-led exploration, or answer a few questions to reflect
          your travel style back to you.
        </p>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/browse">
            Explore by Mood
          </Link>
          <Link className="btn btn-secondary" to="/quiz">
            Discover Your Travel Style
          </Link>
        </div>
      </section>
    </main>
  );
}
