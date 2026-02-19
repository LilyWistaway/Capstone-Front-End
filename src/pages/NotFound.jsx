import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container">
      <section className="card stack card-center">
        <h1 className="h1">That page doesn’t exist.</h1>

        <p className="body card-center__body">
          The route you tried isn’t part of this prototype. Go somewhere useful.
        </p>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
          <Link className="btn btn-secondary" to="/browse">
            Browse Destinations
          </Link>
        </div>
      </section>
    </main>
  );
}
