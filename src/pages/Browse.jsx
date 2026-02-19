import { Link } from "react-router-dom";

export default function Browse() {
  return (
    <main className="container">
      <section className="card card--primary stack card-center">
        <h1 className="h1">Browse destinations</h1>

        <p className="body card-center__body">
          Explore curated destinations and save what you’re drawn to into a
          playlist.
        </p>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/playlists">
            View Playlists
          </Link>
          <Link className="btn btn-secondary" to="/quiz">
            Take the Travel Style Quiz
          </Link>
        </div>

        <p className="caption card-center__body">
          Next: you’ll be able to add lodging destinations directly into a
          playlist from here.
        </p>
      </section>
    </main>
  );
}
