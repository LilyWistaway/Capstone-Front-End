import { Link, useLocation } from "react-router-dom";

export default function AccessGate({
  title = "Log in to continue",
  message = "Create an account or log in to save, view, and personalize your experience.",
}) {
  const location = useLocation();
  const from = location.pathname + location.search;

  return (
    <main className="container">
      <section className="card stack card-narrow">
        <div className="stack-tight">
          <h1 className="h1">{title}</h1>
          <p className="caption">{message}</p>
        </div>

        <div className="inline-row">
          <Link className="btn btn-primary" to="/login" state={{ from }}>
            Log in
          </Link>
          <Link className="btn btn-secondary" to="/register" state={{ from }}>
            Create account
          </Link>
        </div>

        <div className="stack-tight">
          <p className="caption">You can still explore without an account:</p>
          <div className="inline-row">
            <Link className="link" to="/browse">
              Browse
            </Link>
            <Link className="link" to="/quiz">
              Take the quiz
            </Link>
            <Link className="link" to="/booking">
              Book
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
