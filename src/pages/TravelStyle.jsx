import { Link } from "react-router-dom";

export default function TravelStyle() {
  return (
    <main className="container">
      <section className="card stack card-center">
        <h1 className="h1">Your travel style</h1>

        <p className="body card-center__body">
          A living reflection of what you save and return to. This is where
          clarity builds.
        </p>

        <div className="card card-compact stack-tight">
          <h2 className="h2 center">Insights</h2>

          <div className="stack-tight">
            <div className="badge">
              You tend to save places with strong character.
            </div>
            <div className="badge">You return to calm over crowded.</div>
            <div className="badge">You like options, not obligation.</div>
          </div>
        </div>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/browse">
            Browse Destinations
          </Link>
          <Link className="btn btn-secondary" to="/playlists">
            View Playlists
          </Link>
        </div>
      </section>
    </main>
  );
}
