import { Link } from "react-router-dom";

export default function Booking() {
  return (
    <main className="container">
      <section className="card stack">
        <h1 className="h1">Trip alignment</h1>
        <p className="body">
          When you’re ready to narrow choices by timing, budget, and logistics,
          you’ll do it here.
        </p>

        <div className="inline-row">
          <Link className="btn btn-primary" to="/playlists">
            Choose a Playlist
          </Link>
          <Link className="btn btn-secondary" to="/browse">
            Keep Exploring
          </Link>
        </div>
      </section>
    </main>
  );
}
