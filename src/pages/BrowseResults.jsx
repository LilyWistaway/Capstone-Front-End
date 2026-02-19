import { Link } from "react-router-dom";

export default function BrowseResults() {
  return (
    <main className="container">
      <section className="card card--primary stack card-center">
        <h1 className="h1">Browse results</h1>

        <p className="body card-center__body">
          This will show destination matches after the Browse inputs.
        </p>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/playlists">
            View Playlists
          </Link>
          <Link className="btn btn-secondary" to="/browse">
            Refine inputs
          </Link>
        </div>
      </section>
    </main>
  );
}
